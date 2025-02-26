import { CollectionConfig } from 'payload'
import NavigationBarBlock from '@/fields/ui/organisms/navigation-bar-block'

export const NavigationBars: CollectionConfig = {
  slug: 'navigation-bars',
  admin: {
    group: 'Layouts',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [NavigationBarBlock],
    },
  ],
}
