import { CollectionConfig } from 'payload'

export const PaymentDetails: CollectionConfig = {
  slug: 'payment-details',
  admin: {
    group: 'Payment',
  },
  fields: [
    {
      name: 'order_id',
      type: 'number',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'provider',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'text',
      required: true,
    },
  ],
}
