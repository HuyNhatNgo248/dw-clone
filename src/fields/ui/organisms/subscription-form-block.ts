import { Block } from 'payload'
import FormBlock from '../molecules/form-block'

const SubscriptionFormBlock: Block = {
  slug: 'SubscriptionForm',
  interfaceName: 'SubscriptionFormBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        FormBlock,
      ],
    },
    {
      name: 'privacyStatement',
      type: 'richText',
    },
  ],
}

export default SubscriptionFormBlock
