import { Block } from 'payload'
import ListItemBlock from '../molecules/list-item'

const FirstLevelBlock: Block = {
  slug: 'First Level',
  interfaceName: 'FirstLevelBlock',
  fields: [
    {
      name: 'leftIconList', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 5,
      blocks: [ListItemBlock],
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
      blocks: [ListItemBlock],
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
      blocks: [ListItemBlock],
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
