import { CollectionConfig, CollectionSlug } from 'payload'

import ColorField from '@/fields/ui/atoms/color-field'
import ImageBlock from '@/fields/ui/atoms/image-block'

export const ProductVariants: CollectionConfig = {
  slug: 'product-variants',
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
      name: 'description',
      type: 'richText',
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
    {
      name: 'images', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ImageBlock],
    },
  ],
}
