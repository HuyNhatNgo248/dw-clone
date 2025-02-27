import { CollectionConfig } from 'payload'
import NavMenuBlock from '@/fields/ui/organisms/nav-menu-block'
import ListItemBlock from '@/fields/ui/molecules/list-item'

export const NavMenus: CollectionConfig = {
  slug: 'nav-menus',
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
      blocks: [NavMenuBlock],
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
