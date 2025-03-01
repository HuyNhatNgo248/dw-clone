import { CollectionConfig } from 'payload'
import ListItemBlock from '@/fields/ui/molecules/list-item-block'
import NavigationMenuBlock from '@/fields/ui/organisms/navigation-menu-block'

export const NavigationMenus: CollectionConfig = {
  slug: 'navigation-menus',
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
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [NavigationMenuBlock],
    },
    {
      name: 'serviceOffers',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [ListItemBlock],
    },
  ],
}
