import { CollectionConfig } from 'payload'

export const UserPayment: CollectionConfig = {
  slug: 'user-payment',
  admin: {
    group: 'Payment',
  },
  fields: [
    {
      name: 'user_id',
      type: 'number',
      required: true,
    },
    {
      name: 'payment_type',
      type: 'text',
      required: true,
    },
    {
      name: 'provider',
      type: 'text',
      required: true,
    },
    {
      name: 'account_no',
      type: 'number',
      required: true,
    },
    {
      name: 'expiry',
      type: 'date',
      required: true,
    },
  ],
}
