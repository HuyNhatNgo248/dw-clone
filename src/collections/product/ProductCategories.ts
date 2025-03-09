import { CollectionConfig } from 'payload'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  admin: {
    useAsTitle: 'title',
    group: 'Product',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure the slug is unique across all entries
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
    },
  ],
}
