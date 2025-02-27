import { Block } from 'payload'
import ListItemBlock from '../molecules/list-item'
import ImageBlock from '../atoms/image-block'

const MenuItemBlock: Block = {
  slug: 'Menu Item',
  interfaceName: 'MenuItemBlock',
  fields: [
    {
      name: 'categoryTitle',
      type: 'text',
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

const NavMenuBlock: Block = {
  slug: 'Nav Menu',
  interfaceName: 'NavMenuBlock',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [MenuItemBlock, ListItemBlock],
    },

  ],
}

export default NavMenuBlock
