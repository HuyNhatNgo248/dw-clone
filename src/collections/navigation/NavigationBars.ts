import { CollectionConfig, CollectionSlug } from 'payload'
import NavigationBarBlock from '@/fields/ui/organisms/navigation-bar-block'

export const NavigationBars: CollectionConfig = {
  slug: 'navigation-bars',
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
      name: 'navigationMenu',
      type: 'relationship',
      relationTo: 'navigation-menus' as CollectionSlug,
      hasMany: false,
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
