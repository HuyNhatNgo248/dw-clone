// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

// Layout Collections
import { Footers } from './collections/layout/Footers'
import { ServiceOffers } from './collections/layout/ServiceOffers'
import { SubscriptionForms } from './collections/layout/SubscriptionForms'

// Navigation Collections
import { NavigationBars } from './collections/navigation/NavigationBars'
import { NavigationMenus } from './collections/navigation/NavigationMenus'
import { MainMenuItems } from './collections/navigation/MainMenuItems'

// Order Collections
import { OrderDetails } from './collections/order/OrderDetails'
import { OrderItems } from './collections/order/OrderItems'

// Payment Collections
import { PaymentDetails } from './collections/payment/PaymentDetails'
import { UserPayment } from './collections/payment/UserPayment'

// Product Collections
import { Discounts } from './collections/product/Discounts'
import { ProductCategories } from './collections/product/ProductCategories'
import { ProductInventory } from './collections/product/ProductInventory'
import { Products } from './collections/product/Products'
import { ProductVariants } from './collections/product/ProductVariants'
import { ProductSizeGuides } from './collections/product/ProductSizeGuides'

// Session Collections
import { CartItem } from './collections/session/CartItem'
import { ShoppingSession } from './collections/session/ShoppingSession'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isDev = process.env.NODE_ENV === 'development'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    ServiceOffers,
    Footers,
    NavigationBars,
    SubscriptionForms,
    NavigationMenus,
    MainMenuItems,
    OrderDetails,
    OrderItems,
    PaymentDetails,
    UserPayment,
    Discounts,
    ProductCategories,
    ProductInventory,
    Products,
    ProductVariants,
    ProductSizeGuides,
    CartItem,
    ShoppingSession,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, EXPERIMENTAL_TableFeature()],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder

    ...(!isDev
      ? [
          vercelBlobStorage({
            enabled: true, // Optional, defaults to true
            // Specify which collections should use Vercel Blob
            collections: {
              media: true,
            },
            // Token provided by Vercel once Blob storage is added to your Vercel project
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
