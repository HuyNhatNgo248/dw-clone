import { CollectionConfig, CollectionSlug } from 'payload'

import ColorField from '@/fields/ui/atoms/color-field'

export const Products: CollectionConfig = {
  slug: 'products',
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
    ColorField({
      name: 'color',
      label: 'Color',
      required: true,
    }),
    {
      name: 'desc',
      type: 'richText',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories' as CollectionSlug,
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'discount',
      type: 'relationship',
      relationTo: 'discounts' as CollectionSlug,
    },
  ],
}
