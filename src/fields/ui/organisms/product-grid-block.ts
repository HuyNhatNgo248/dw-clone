import { Block } from 'payload'
import ImageBlock from '../atoms/image-block'

const ProductGridBlock: Block = {
  slug: 'ProductGrid',
  interfaceName: 'ProductGridBlock',
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
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ImageBlock],
    },
  ],
}

export default ProductGridBlock
