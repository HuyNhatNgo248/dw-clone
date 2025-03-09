import { CollectionConfig } from 'payload'

export const ShoppingSession: CollectionConfig = {
  slug: 'shopping-session',
  admin: {
    group: 'Session',
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
  ],
}
