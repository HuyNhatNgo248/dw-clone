import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  ALTER TABLE "subscription_forms_blocks_subscription_form_subheading" DROP CONSTRAINT "subscription_forms_blocks_subscription_form_subheading_parent_id_fk";
  
  DROP INDEX "subscription_forms_blocks_subscription_form_subheading_order_idx";
  DROP INDEX "subscription_forms_blocks_subscription_form_subheading_parent_id_idx";
  ALTER TABLE "users" ADD COLUMN "reset_password_requested_at" timestamp(3) with time zone;
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'api/media/file';
  ALTER TABLE "media" ADD COLUMN "_objectkey" varchar;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  ALTER TABLE "subscription_forms_blocks_subscription_form_subheading" ADD CONSTRAINT "subscription_forms_blocks_subscription_form_subhead_a2072224_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms_blocks_subscription_form"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "subscription_forms_blocks_subscription_form_subhea_5fb20a42_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_order");
  CREATE INDEX "subscription_forms_blocks_subscription_form_subhea_c29c484a_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_sessions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "payload_kv" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  ALTER TABLE "subscription_forms_blocks_subscription_form_subheading" DROP CONSTRAINT "subscription_forms_blocks_subscription_form_subhead_a2072224_fk";
  
  DROP INDEX "subscription_forms_blocks_subscription_form_subhea_5fb20a42_idx";
  DROP INDEX "subscription_forms_blocks_subscription_form_subhea_c29c484a_idx";
  ALTER TABLE "subscription_forms_blocks_subscription_form_subheading" ADD CONSTRAINT "subscription_forms_blocks_subscription_form_subheading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms_blocks_subscription_form"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "subscription_forms_blocks_subscription_form_subheading_order_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_order");
  CREATE INDEX "subscription_forms_blocks_subscription_form_subheading_parent_id_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_parent_id");
  ALTER TABLE "users" DROP COLUMN "reset_password_requested_at";
  ALTER TABLE "media" DROP COLUMN "prefix";
  ALTER TABLE "media" DROP COLUMN "_objectkey";`)
}
