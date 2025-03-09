// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Footers } from './collections/layout/Footers'
import { ServiceOffers } from './collections/layout/ServiceOffers'
import { SubscriptionForms } from './collections/layout/SubscriptionForms'

import { NavigationBars } from './collections/navigation/NavigationBars'
import { NavigationMenus } from './collections/navigation/NavigationMenus'
import { MainMenuItems } from './collections/navigation/MainMenuItems'

import { OrderDetails } from './collections/order/OrderDetails'
import { OrderItems } from './collections/order/OrderItems'

import { PaymentDetails } from './collections/payment/PaymentDetails'
import { UserPayment } from './collections/payment/UserPayment'

import { Discounts } from './collections/product/Discounts'
import { ProductCategories } from './collections/product/ProductCategories'
import { ProductInventory } from './collections/product/ProductInventory'
import { Products } from './collections/product/Products'

import { CartItem } from './collections/session/CartItem'
import { ShoppingSession } from './collections/session/ShoppingSession'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
    CartItem,
    ShoppingSession,
  ],
  editor: lexicalEditor(),
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
  ],
})
