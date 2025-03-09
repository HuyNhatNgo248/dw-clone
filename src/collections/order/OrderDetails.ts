import { CollectionConfig } from 'payload'

export const OrderDetails: CollectionConfig = {
  slug: 'order-details',
  admin: {
    group: 'Order',
  },
  fields: [
    {
      name: 'user_id',
      type: 'text',
      required: true,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    {
      name: 'payment_id',
      type: 'number',
      required: true,
    },
  ],
}
