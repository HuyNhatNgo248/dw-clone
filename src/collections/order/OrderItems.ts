import { CollectionConfig } from 'payload'

export const OrderItems: CollectionConfig = {
  slug: 'order-items',
  admin: {
    group: 'Order',
  },
  fields: [
    {
      name: 'order_id',
      type: 'number',
      required: true,
    },
    {
      name: 'product_id',
      type: 'number',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
    },
  ],
}
