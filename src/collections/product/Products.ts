import { CollectionConfig, CollectionSlug } from 'payload'

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
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories' as CollectionSlug,
      required: true,
    },
    {
      name: 'variants',
      type: 'relationship',
      relationTo: 'product-variants' as CollectionSlug,
      hasMany: true,
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'relationship',
      relationTo: 'service-offers' as CollectionSlug,
      hasMany: false,
    },
  ],
}
