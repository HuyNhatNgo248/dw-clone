import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_button_variant" AS ENUM('primary', 'secondary', 'tertiary');
  CREATE TYPE "public"."enum_pages_blocks_button_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_navigation_bars_blocks_first_level_item_type" AS ENUM('menu-trigger', 'link');
  CREATE TYPE "public"."enum_navigation_bars_blocks_second_level_item_type" AS ENUM('menu-trigger', 'link');
  CREATE TYPE "public"."enum_subscription_forms_blocks_input_type" AS ENUM('text', 'email', 'password');
  CREATE TYPE "public"."enum_subscription_forms_blocks_button_variant" AS ENUM('primary', 'secondary', 'tertiary');
  CREATE TYPE "public"."enum_subscription_forms_blocks_button_size" AS ENUM('small', 'medium', 'large');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"icon_field" varchar,
  	"variant" "enum_pages_blocks_button_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_button_size" DEFAULT 'medium',
  	"open_in_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"description" varchar,
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_promo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"subtitle" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_categories_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"grid_settings" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_product_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_introduction_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"service_offers_id" integer,
  	"navigation_bar_id" integer,
  	"subscription_form_id" integer,
  	"footer_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"product_categories_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "service_offers_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "service_offers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footers_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footers_blocks_footer_nav_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footers_blocks_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_blocks_first_level_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"type" "enum_navigation_bars_blocks_first_level_item_type" DEFAULT 'menu-trigger',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_blocks_first_level" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_blocks_second_level_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"type" "enum_navigation_bars_blocks_second_level_item_type" DEFAULT 'menu-trigger',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_blocks_second_level" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_blocks_navigation_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"navigation_menu_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_bars_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"main_menu_items_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms_blocks_subscription_form_subheading" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms_blocks_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"placeholder" varchar,
  	"helper_text" varchar,
  	"type" "enum_subscription_forms_blocks_input_type" DEFAULT 'email' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"icon_field" varchar,
  	"variant" "enum_subscription_forms_blocks_button_variant" DEFAULT 'primary',
  	"size" "enum_subscription_forms_blocks_button_size" DEFAULT 'medium',
  	"open_in_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms_blocks_subscription_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"privacy_statement" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "subscription_forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_menus_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_menus_blocks_main_menu_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_menus_blocks_navigation_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_menus" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_menus_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"main_menu_items_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_items_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"icon_field" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_items_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"description" varchar,
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_items_subcategories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subcategory_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "main_menu_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"category_title" varchar,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "order_details" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" varchar NOT NULL,
  	"total" numeric NOT NULL,
  	"payment_id" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "order_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order_id" numeric NOT NULL,
  	"product_id" numeric NOT NULL,
  	"quantity" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payment_details" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order_id" numeric NOT NULL,
  	"amount" numeric NOT NULL,
  	"provider" varchar NOT NULL,
  	"status" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user_payment" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" numeric NOT NULL,
  	"payment_type" varchar NOT NULL,
  	"provider" varchar NOT NULL,
  	"account_no" numeric NOT NULL,
  	"expiry" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "discounts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"desc" varchar,
  	"discount_percent" numeric NOT NULL,
  	"active" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "product_categories_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"description" varchar,
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "product_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"desc" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "product_inventory" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"quantity" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"layout_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "products_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"product_categories_id" integer,
  	"product_variants_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "product_variants_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"description" varchar,
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "product_variants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"color" varchar NOT NULL,
  	"size" jsonb NOT NULL,
  	"size_guide_id" integer,
  	"description" jsonb NOT NULL,
  	"price" numeric NOT NULL,
  	"discount_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "product_size_guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"guide" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "cart_item" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"session_id" numeric NOT NULL,
  	"product_id" numeric NOT NULL,
  	"quantity" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "shopping_session" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" varchar NOT NULL,
  	"total" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"service_offers_id" integer,
  	"footers_id" integer,
  	"navigation_bars_id" integer,
  	"subscription_forms_id" integer,
  	"navigation_menus_id" integer,
  	"main_menu_items_id" integer,
  	"order_details_id" integer,
  	"order_items_id" integer,
  	"payment_details_id" integer,
  	"user_payment_id" integer,
  	"discounts_id" integer,
  	"product_categories_id" integer,
  	"product_inventory_id" integer,
  	"products_id" integer,
  	"product_variants_id" integer,
  	"product_size_guides_id" integer,
  	"cart_item_id" integer,
  	"shopping_session_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_promo" ADD CONSTRAINT "pages_blocks_promo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_categories_grid" ADD CONSTRAINT "pages_blocks_product_categories_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_product_categories" ADD CONSTRAINT "pages_blocks_product_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_introduction_text" ADD CONSTRAINT "pages_blocks_introduction_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_service_offers_id_service_offers_id_fk" FOREIGN KEY ("service_offers_id") REFERENCES "public"."service_offers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_navigation_bar_id_navigation_bars_id_fk" FOREIGN KEY ("navigation_bar_id") REFERENCES "public"."navigation_bars"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_subscription_form_id_subscription_forms_id_fk" FOREIGN KEY ("subscription_form_id") REFERENCES "public"."subscription_forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_footer_id_footers_id_fk" FOREIGN KEY ("footer_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_product_categories_fk" FOREIGN KEY ("product_categories_id") REFERENCES "public"."product_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "service_offers_blocks_list_item" ADD CONSTRAINT "service_offers_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_offers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footers_blocks_list_item" ADD CONSTRAINT "footers_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footers_blocks_footer_nav_columns" ADD CONSTRAINT "footers_blocks_footer_nav_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers_blocks_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footers_blocks_footer" ADD CONSTRAINT "footers_blocks_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_blocks_first_level_item" ADD CONSTRAINT "navigation_bars_blocks_first_level_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_blocks_first_level" ADD CONSTRAINT "navigation_bars_blocks_first_level_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_blocks_second_level_item" ADD CONSTRAINT "navigation_bars_blocks_second_level_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_blocks_second_level" ADD CONSTRAINT "navigation_bars_blocks_second_level_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_blocks_navigation_bar" ADD CONSTRAINT "navigation_bars_blocks_navigation_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars" ADD CONSTRAINT "navigation_bars_navigation_menu_id_navigation_menus_id_fk" FOREIGN KEY ("navigation_menu_id") REFERENCES "public"."navigation_menus"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_rels" ADD CONSTRAINT "navigation_bars_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_bars_rels" ADD CONSTRAINT "navigation_bars_rels_main_menu_items_fk" FOREIGN KEY ("main_menu_items_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "subscription_forms_blocks_subscription_form_subheading" ADD CONSTRAINT "subscription_forms_blocks_subscription_form_subheading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms_blocks_subscription_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "subscription_forms_blocks_input" ADD CONSTRAINT "subscription_forms_blocks_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "subscription_forms_blocks_button" ADD CONSTRAINT "subscription_forms_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "subscription_forms_blocks_form" ADD CONSTRAINT "subscription_forms_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "subscription_forms_blocks_subscription_form" ADD CONSTRAINT "subscription_forms_blocks_subscription_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subscription_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_menus_blocks_list_item" ADD CONSTRAINT "navigation_menus_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_menus"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_menus_blocks_main_menu_item" ADD CONSTRAINT "navigation_menus_blocks_main_menu_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_menus"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_menus_blocks_navigation_menu" ADD CONSTRAINT "navigation_menus_blocks_navigation_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_menus"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_menus_rels" ADD CONSTRAINT "navigation_menus_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."navigation_menus"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_menus_rels" ADD CONSTRAINT "navigation_menus_rels_main_menu_items_fk" FOREIGN KEY ("main_menu_items_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_items_blocks_list_item" ADD CONSTRAINT "main_menu_items_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_items_blocks_image" ADD CONSTRAINT "main_menu_items_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_items_blocks_image" ADD CONSTRAINT "main_menu_items_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "main_menu_items_subcategories" ADD CONSTRAINT "main_menu_items_subcategories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_categories_blocks_image" ADD CONSTRAINT "product_categories_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_categories_blocks_image" ADD CONSTRAINT "product_categories_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "products" ADD CONSTRAINT "products_layout_id_service_offers_id_fk" FOREIGN KEY ("layout_id") REFERENCES "public"."service_offers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_product_categories_fk" FOREIGN KEY ("product_categories_id") REFERENCES "public"."product_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_product_variants_fk" FOREIGN KEY ("product_variants_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_variants_blocks_image" ADD CONSTRAINT "product_variants_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_variants_blocks_image" ADD CONSTRAINT "product_variants_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_size_guide_id_product_size_guides_id_fk" FOREIGN KEY ("size_guide_id") REFERENCES "public"."product_size_guides"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_discount_id_discounts_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discounts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_offers_fk" FOREIGN KEY ("service_offers_id") REFERENCES "public"."service_offers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_footers_fk" FOREIGN KEY ("footers_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_navigation_bars_fk" FOREIGN KEY ("navigation_bars_id") REFERENCES "public"."navigation_bars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_subscription_forms_fk" FOREIGN KEY ("subscription_forms_id") REFERENCES "public"."subscription_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_navigation_menus_fk" FOREIGN KEY ("navigation_menus_id") REFERENCES "public"."navigation_menus"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_main_menu_items_fk" FOREIGN KEY ("main_menu_items_id") REFERENCES "public"."main_menu_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_order_details_fk" FOREIGN KEY ("order_details_id") REFERENCES "public"."order_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_order_items_fk" FOREIGN KEY ("order_items_id") REFERENCES "public"."order_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payment_details_fk" FOREIGN KEY ("payment_details_id") REFERENCES "public"."payment_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_payment_fk" FOREIGN KEY ("user_payment_id") REFERENCES "public"."user_payment"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_discounts_fk" FOREIGN KEY ("discounts_id") REFERENCES "public"."discounts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_categories_fk" FOREIGN KEY ("product_categories_id") REFERENCES "public"."product_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_inventory_fk" FOREIGN KEY ("product_inventory_id") REFERENCES "public"."product_inventory"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_variants_fk" FOREIGN KEY ("product_variants_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_size_guides_fk" FOREIGN KEY ("product_size_guides_id") REFERENCES "public"."product_size_guides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cart_item_fk" FOREIGN KEY ("cart_item_id") REFERENCES "public"."cart_item"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_shopping_session_fk" FOREIGN KEY ("shopping_session_id") REFERENCES "public"."shopping_session"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_order_idx" ON "pages_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_parent_id_idx" ON "pages_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_path_idx" ON "pages_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_image_idx" ON "pages_blocks_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_promo_order_idx" ON "pages_blocks_promo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_promo_parent_id_idx" ON "pages_blocks_promo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_promo_path_idx" ON "pages_blocks_promo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_grid_order_idx" ON "pages_blocks_product_categories_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_grid_parent_id_idx" ON "pages_blocks_product_categories_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_grid_path_idx" ON "pages_blocks_product_categories_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_order_idx" ON "pages_blocks_product_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_parent_id_idx" ON "pages_blocks_product_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_product_categories_path_idx" ON "pages_blocks_product_categories" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_text_order_idx" ON "pages_blocks_introduction_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_text_parent_id_idx" ON "pages_blocks_introduction_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_text_path_idx" ON "pages_blocks_introduction_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_service_offers_idx" ON "pages" USING btree ("service_offers_id");
  CREATE INDEX IF NOT EXISTS "pages_navigation_bar_idx" ON "pages" USING btree ("navigation_bar_id");
  CREATE INDEX IF NOT EXISTS "pages_subscription_form_idx" ON "pages" USING btree ("subscription_form_id");
  CREATE INDEX IF NOT EXISTS "pages_footer_idx" ON "pages" USING btree ("footer_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_product_categories_id_idx" ON "pages_rels" USING btree ("product_categories_id");
  CREATE INDEX IF NOT EXISTS "service_offers_blocks_list_item_order_idx" ON "service_offers_blocks_list_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "service_offers_blocks_list_item_parent_id_idx" ON "service_offers_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "service_offers_blocks_list_item_path_idx" ON "service_offers_blocks_list_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "service_offers_updated_at_idx" ON "service_offers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "service_offers_created_at_idx" ON "service_offers" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "footers_blocks_list_item_order_idx" ON "footers_blocks_list_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footers_blocks_list_item_parent_id_idx" ON "footers_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footers_blocks_list_item_path_idx" ON "footers_blocks_list_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footers_blocks_footer_nav_columns_order_idx" ON "footers_blocks_footer_nav_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footers_blocks_footer_nav_columns_parent_id_idx" ON "footers_blocks_footer_nav_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footers_blocks_footer_order_idx" ON "footers_blocks_footer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footers_blocks_footer_parent_id_idx" ON "footers_blocks_footer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footers_blocks_footer_path_idx" ON "footers_blocks_footer" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footers_updated_at_idx" ON "footers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "footers_created_at_idx" ON "footers" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_item_order_idx" ON "navigation_bars_blocks_first_level_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_item_parent_id_idx" ON "navigation_bars_blocks_first_level_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_item_path_idx" ON "navigation_bars_blocks_first_level_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_order_idx" ON "navigation_bars_blocks_first_level" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_parent_id_idx" ON "navigation_bars_blocks_first_level" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_first_level_path_idx" ON "navigation_bars_blocks_first_level" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_item_order_idx" ON "navigation_bars_blocks_second_level_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_item_parent_id_idx" ON "navigation_bars_blocks_second_level_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_item_path_idx" ON "navigation_bars_blocks_second_level_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_order_idx" ON "navigation_bars_blocks_second_level" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_parent_id_idx" ON "navigation_bars_blocks_second_level" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_second_level_path_idx" ON "navigation_bars_blocks_second_level" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_navigation_bar_order_idx" ON "navigation_bars_blocks_navigation_bar" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_navigation_bar_parent_id_idx" ON "navigation_bars_blocks_navigation_bar" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_blocks_navigation_bar_path_idx" ON "navigation_bars_blocks_navigation_bar" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_navigation_menu_idx" ON "navigation_bars" USING btree ("navigation_menu_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_updated_at_idx" ON "navigation_bars" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "navigation_bars_created_at_idx" ON "navigation_bars" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navigation_bars_rels_order_idx" ON "navigation_bars_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "navigation_bars_rels_parent_idx" ON "navigation_bars_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_bars_rels_path_idx" ON "navigation_bars_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "navigation_bars_rels_main_menu_items_id_idx" ON "navigation_bars_rels" USING btree ("main_menu_items_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_subscription_form_subheading_order_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_subscription_form_subheading_parent_id_idx" ON "subscription_forms_blocks_subscription_form_subheading" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_input_order_idx" ON "subscription_forms_blocks_input" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_input_parent_id_idx" ON "subscription_forms_blocks_input" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_input_path_idx" ON "subscription_forms_blocks_input" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_button_order_idx" ON "subscription_forms_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_button_parent_id_idx" ON "subscription_forms_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_button_path_idx" ON "subscription_forms_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_form_order_idx" ON "subscription_forms_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_form_parent_id_idx" ON "subscription_forms_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_form_path_idx" ON "subscription_forms_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_subscription_form_order_idx" ON "subscription_forms_blocks_subscription_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_subscription_form_parent_id_idx" ON "subscription_forms_blocks_subscription_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "subscription_forms_blocks_subscription_form_path_idx" ON "subscription_forms_blocks_subscription_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "subscription_forms_updated_at_idx" ON "subscription_forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "subscription_forms_created_at_idx" ON "subscription_forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_list_item_order_idx" ON "navigation_menus_blocks_list_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_list_item_parent_id_idx" ON "navigation_menus_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_list_item_path_idx" ON "navigation_menus_blocks_list_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_main_menu_item_order_idx" ON "navigation_menus_blocks_main_menu_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_main_menu_item_parent_id_idx" ON "navigation_menus_blocks_main_menu_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_main_menu_item_path_idx" ON "navigation_menus_blocks_main_menu_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_navigation_menu_order_idx" ON "navigation_menus_blocks_navigation_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_navigation_menu_parent_id_idx" ON "navigation_menus_blocks_navigation_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_menus_blocks_navigation_menu_path_idx" ON "navigation_menus_blocks_navigation_menu" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "navigation_menus_updated_at_idx" ON "navigation_menus" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "navigation_menus_created_at_idx" ON "navigation_menus" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navigation_menus_rels_order_idx" ON "navigation_menus_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "navigation_menus_rels_parent_idx" ON "navigation_menus_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_menus_rels_path_idx" ON "navigation_menus_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "navigation_menus_rels_main_menu_items_id_idx" ON "navigation_menus_rels" USING btree ("main_menu_items_id");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_list_item_order_idx" ON "main_menu_items_blocks_list_item" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_list_item_parent_id_idx" ON "main_menu_items_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_list_item_path_idx" ON "main_menu_items_blocks_list_item" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_image_order_idx" ON "main_menu_items_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_image_parent_id_idx" ON "main_menu_items_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_image_path_idx" ON "main_menu_items_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "main_menu_items_blocks_image_image_idx" ON "main_menu_items_blocks_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "main_menu_items_subcategories_order_idx" ON "main_menu_items_subcategories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "main_menu_items_subcategories_parent_id_idx" ON "main_menu_items_subcategories" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "main_menu_items_slug_idx" ON "main_menu_items" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "main_menu_items_updated_at_idx" ON "main_menu_items" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "main_menu_items_created_at_idx" ON "main_menu_items" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "order_details_updated_at_idx" ON "order_details" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "order_details_created_at_idx" ON "order_details" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "order_items_updated_at_idx" ON "order_items" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "order_items_created_at_idx" ON "order_items" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payment_details_updated_at_idx" ON "payment_details" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payment_details_created_at_idx" ON "payment_details" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "user_payment_updated_at_idx" ON "user_payment" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_payment_created_at_idx" ON "user_payment" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "discounts_updated_at_idx" ON "discounts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "discounts_created_at_idx" ON "discounts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "product_categories_blocks_image_order_idx" ON "product_categories_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "product_categories_blocks_image_parent_id_idx" ON "product_categories_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "product_categories_blocks_image_path_idx" ON "product_categories_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "product_categories_blocks_image_image_idx" ON "product_categories_blocks_image" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "product_categories_slug_idx" ON "product_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "product_categories_updated_at_idx" ON "product_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "product_categories_created_at_idx" ON "product_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "product_inventory_updated_at_idx" ON "product_inventory" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "product_inventory_created_at_idx" ON "product_inventory" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "products_layout_idx" ON "products" USING btree ("layout_id");
  CREATE INDEX IF NOT EXISTS "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "products_created_at_idx" ON "products" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "products_rels_order_idx" ON "products_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "products_rels_parent_idx" ON "products_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "products_rels_path_idx" ON "products_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "products_rels_product_categories_id_idx" ON "products_rels" USING btree ("product_categories_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "products_rels_product_variants_id_idx" ON "products_rels" USING btree ("product_variants_id","path");
  CREATE INDEX IF NOT EXISTS "product_variants_blocks_image_order_idx" ON "product_variants_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "product_variants_blocks_image_parent_id_idx" ON "product_variants_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "product_variants_blocks_image_path_idx" ON "product_variants_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "product_variants_blocks_image_image_idx" ON "product_variants_blocks_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "product_variants_size_guide_idx" ON "product_variants" USING btree ("size_guide_id");
  CREATE INDEX IF NOT EXISTS "product_variants_discount_idx" ON "product_variants" USING btree ("discount_id");
  CREATE INDEX IF NOT EXISTS "product_variants_updated_at_idx" ON "product_variants" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "product_variants_created_at_idx" ON "product_variants" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "product_size_guides_updated_at_idx" ON "product_size_guides" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "product_size_guides_created_at_idx" ON "product_size_guides" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "cart_item_updated_at_idx" ON "cart_item" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "cart_item_created_at_idx" ON "cart_item" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "shopping_session_updated_at_idx" ON "shopping_session" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "shopping_session_created_at_idx" ON "shopping_session" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_service_offers_id_idx" ON "payload_locked_documents_rels" USING btree ("service_offers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_footers_id_idx" ON "payload_locked_documents_rels" USING btree ("footers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_navigation_bars_id_idx" ON "payload_locked_documents_rels" USING btree ("navigation_bars_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_subscription_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("subscription_forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_navigation_menus_id_idx" ON "payload_locked_documents_rels" USING btree ("navigation_menus_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_main_menu_items_id_idx" ON "payload_locked_documents_rels" USING btree ("main_menu_items_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_details_id_idx" ON "payload_locked_documents_rels" USING btree ("order_details_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_items_id_idx" ON "payload_locked_documents_rels" USING btree ("order_items_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payment_details_id_idx" ON "payload_locked_documents_rels" USING btree ("payment_details_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_payment_id_idx" ON "payload_locked_documents_rels" USING btree ("user_payment_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_discounts_id_idx" ON "payload_locked_documents_rels" USING btree ("discounts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_product_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("product_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_product_inventory_id_idx" ON "payload_locked_documents_rels" USING btree ("product_inventory_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_product_variants_id_idx" ON "payload_locked_documents_rels" USING btree ("product_variants_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_product_size_guides_id_idx" ON "payload_locked_documents_rels" USING btree ("product_size_guides_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_cart_item_id_idx" ON "payload_locked_documents_rels" USING btree ("cart_item_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_shopping_session_id_idx" ON "payload_locked_documents_rels" USING btree ("shopping_session_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_button" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_promo" CASCADE;
  DROP TABLE "pages_blocks_product_categories_grid" CASCADE;
  DROP TABLE "pages_blocks_product_categories" CASCADE;
  DROP TABLE "pages_blocks_introduction_text" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "service_offers_blocks_list_item" CASCADE;
  DROP TABLE "service_offers" CASCADE;
  DROP TABLE "footers_blocks_list_item" CASCADE;
  DROP TABLE "footers_blocks_footer_nav_columns" CASCADE;
  DROP TABLE "footers_blocks_footer" CASCADE;
  DROP TABLE "footers" CASCADE;
  DROP TABLE "navigation_bars_blocks_first_level_item" CASCADE;
  DROP TABLE "navigation_bars_blocks_first_level" CASCADE;
  DROP TABLE "navigation_bars_blocks_second_level_item" CASCADE;
  DROP TABLE "navigation_bars_blocks_second_level" CASCADE;
  DROP TABLE "navigation_bars_blocks_navigation_bar" CASCADE;
  DROP TABLE "navigation_bars" CASCADE;
  DROP TABLE "navigation_bars_rels" CASCADE;
  DROP TABLE "subscription_forms_blocks_subscription_form_subheading" CASCADE;
  DROP TABLE "subscription_forms_blocks_input" CASCADE;
  DROP TABLE "subscription_forms_blocks_button" CASCADE;
  DROP TABLE "subscription_forms_blocks_form" CASCADE;
  DROP TABLE "subscription_forms_blocks_subscription_form" CASCADE;
  DROP TABLE "subscription_forms" CASCADE;
  DROP TABLE "navigation_menus_blocks_list_item" CASCADE;
  DROP TABLE "navigation_menus_blocks_main_menu_item" CASCADE;
  DROP TABLE "navigation_menus_blocks_navigation_menu" CASCADE;
  DROP TABLE "navigation_menus" CASCADE;
  DROP TABLE "navigation_menus_rels" CASCADE;
  DROP TABLE "main_menu_items_blocks_list_item" CASCADE;
  DROP TABLE "main_menu_items_blocks_image" CASCADE;
  DROP TABLE "main_menu_items_subcategories" CASCADE;
  DROP TABLE "main_menu_items" CASCADE;
  DROP TABLE "order_details" CASCADE;
  DROP TABLE "order_items" CASCADE;
  DROP TABLE "payment_details" CASCADE;
  DROP TABLE "user_payment" CASCADE;
  DROP TABLE "discounts" CASCADE;
  DROP TABLE "product_categories_blocks_image" CASCADE;
  DROP TABLE "product_categories" CASCADE;
  DROP TABLE "product_inventory" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "products_rels" CASCADE;
  DROP TABLE "product_variants_blocks_image" CASCADE;
  DROP TABLE "product_variants" CASCADE;
  DROP TABLE "product_size_guides" CASCADE;
  DROP TABLE "cart_item" CASCADE;
  DROP TABLE "shopping_session" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_button_variant";
  DROP TYPE "public"."enum_pages_blocks_button_size";
  DROP TYPE "public"."enum_navigation_bars_blocks_first_level_item_type";
  DROP TYPE "public"."enum_navigation_bars_blocks_second_level_item_type";
  DROP TYPE "public"."enum_subscription_forms_blocks_input_type";
  DROP TYPE "public"."enum_subscription_forms_blocks_button_variant";
  DROP TYPE "public"."enum_subscription_forms_blocks_button_size";`)
}
