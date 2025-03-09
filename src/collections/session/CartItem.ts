import { CollectionConfig } from 'payload'

export const CartItem: CollectionConfig = {
  slug: 'cart-item',
  admin: {
    group: 'Session',
  },
  fields: [
    {
      name: 'session_id',
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
