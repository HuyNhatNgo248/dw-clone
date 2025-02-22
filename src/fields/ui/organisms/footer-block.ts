import { Block } from 'payload'
import ListItemBlock from '../molecules/list-item'

const FooterBlock: Block = {
  slug: 'Footer',
  interfaceName: 'FooterBlock',
  fields: [
    {
      name: 'navColumns',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'layout', // required
          type: 'blocks', // required
          minRows: 1,
          maxRows: 20,
          blocks: [ListItemBlock],
        },
      ],
    },
    {
      name: 'socialMedia', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ListItemBlock],
    },
  ],
}

export default FooterBlock
