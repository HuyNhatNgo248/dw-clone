import { Block } from 'payload'
import ButtonBlock from '../atoms/button-block'
import ImageBlock from '../atoms/image-block'

const PromoBlock: Block = {
  slug: 'Promo',
  interfaceName: 'PromoBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'body',
      type: 'text',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        ButtonBlock,
        ImageBlock,
      ],
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}

export default PromoBlock
