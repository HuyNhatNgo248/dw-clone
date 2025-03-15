import { CollectionConfig } from 'payload'
import ImageBlock from '@/fields/ui/atoms/image-block'

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
    {
      name: 'representationImage', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 1,
      blocks: [ImageBlock],
    },
  ],
}
