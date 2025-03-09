import { CollectionConfig } from 'payload'

export const ProductInventory: CollectionConfig = {
  slug: 'product-inventory',
  admin: {
    group: 'Product',
  },
  fields: [
    {
      name: 'quantity',
      type: 'number',
      required: true,
    },
  ],
}
