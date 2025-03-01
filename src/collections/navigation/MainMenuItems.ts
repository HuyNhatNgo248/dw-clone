import { CollectionConfig } from 'payload'
import ListItemBlock from '@/fields/ui/molecules/list-item-block'
import ImageBlock from '@/fields/ui/atoms/image-block'

export const MainMenuItems: CollectionConfig = {
  slug: 'main-menu-items',
  admin: {
    group: 'Navigation',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'categoryTitle',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure the slug is unique across all entries
      admin: {
        position: 'sidebar', // Optional: Display it in the sidebar for better UX
      },
    },
    {
      name: 'subcategories',
      type: 'array',
      fields: [
        {
          name: 'subcategoryTitle',
          type: 'text',
        },
        {
          name: 'layout',
          type: 'blocks',
          minRows: 1,
          maxRows: 20,
          blocks: [ListItemBlock, ImageBlock],
        },
      ],
    },
  ],
}
