import { CollectionConfig } from 'payload'

export const Discounts: CollectionConfig = {
  slug: 'discounts',
  admin: {
    useAsTitle: 'name',
    group: 'Product',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
    },
    {
      name: 'discount_percent',
      type: 'number',
      required: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
