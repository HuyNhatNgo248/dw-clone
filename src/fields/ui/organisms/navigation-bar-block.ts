import { Block, CollectionSlug } from 'payload'
import ListItemBlock from '../molecules/list-item-block'

// Extending ListItemBlock
const SecondLevelItemBlock: Block = {
  slug: 'Second Level Item',
  interfaceName: 'SecondLevelItemBlock',
  fields: [
    ...ListItemBlock.fields,
    {
      name: 'mainMenuItems',
      type: 'relationship',
      relationTo: 'main-menu-items' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Menu trigger', value: 'menu-trigger' },
        { label: 'Link', value: 'link' },
      ],
      defaultValue: 'menu-trigger',
    },
  ],
}

// Extending ListItemBlock
const FirstLevelItemBlock: Block = {
  slug: 'First Level Item',
  interfaceName: 'FirstLevelItemBlock',
  fields: [
    ...ListItemBlock.fields,
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Menu trigger', value: 'menu-trigger' },
        { label: 'Link', value: 'link' },
      ],
      defaultValue: 'menu-trigger',
    },
  ],
}

const FirstLevelBlock: Block = {
  slug: 'First Level',
  interfaceName: 'FirstLevelBlock',
  fields: [
    {
      name: 'leftIconList', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 5,
      blocks: [FirstLevelItemBlock],
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'rightIconList', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 5,
      blocks: [FirstLevelItemBlock],
    },
  ],
}

const SecondLevelBlock: Block = {
  slug: 'Second Level',
  interfaceName: 'SecondLevelBlock',
  fields: [
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 10,
      blocks: [SecondLevelItemBlock],
    },
  ],
}

const NavigationBarBlock: Block = {
  slug: 'Navigation Bar',
  interfaceName: 'NavigationBarBlock',
  fields: [
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 2,
      blocks: [FirstLevelBlock, SecondLevelBlock],
    },
  ],
}

export default NavigationBarBlock
