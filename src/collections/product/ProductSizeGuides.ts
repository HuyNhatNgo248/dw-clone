import { CollectionConfig } from 'payload'

export const ProductSizeGuides: CollectionConfig = {
  slug: 'product-size-guides',
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
      name: 'guide',
      type: 'richText',
      required: true,
    },
  ],
}
