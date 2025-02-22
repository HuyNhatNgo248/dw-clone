import { Block } from 'payload'
import ButtonBlock from '../atoms/button-block'
import ImageBlock from '../atoms/image-block'

const HeroBlock: Block = {
  slug: 'Hero',
  interfaceName: 'HeroBlock',
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
  ],
}

export default HeroBlock
