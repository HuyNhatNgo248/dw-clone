import { Block } from 'payload'
import IconField from '../atoms/icon-field'

const ListItemBlock: Block = {
  slug: 'list-item',
  interfaceName: 'ListItemBlock',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
    IconField,
  ],
}

export default ListItemBlock
