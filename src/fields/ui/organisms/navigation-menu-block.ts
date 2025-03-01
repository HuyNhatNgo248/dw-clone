import { Block, CollectionSlug } from 'payload'
import ListItemBlock from '../molecules/list-item-block'

const MainMenuItemBlock: Block = {
  slug: 'main-menu-item',
  interfaceName: 'MainMenuItemBlock',
  fields: [
    {
      name: 'mainMenuItems',
      type: 'relationship',
      relationTo: 'main-menu-items' as CollectionSlug,
      hasMany: true,
    },
  ],
}

const NavigationMenuBlock: Block = {
  slug: 'Navigation Menu',
  interfaceName: 'NavigationMenuBlock',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [ListItemBlock, MainMenuItemBlock],
    },
  ],
}

export default NavigationMenuBlock
