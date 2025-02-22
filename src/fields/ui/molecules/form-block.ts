import { Block } from 'payload'
import InputBlock from '../atoms/input-block'
import ButtonBlock from '../atoms/button-block'

const FormBlock: Block = {
  slug: 'Form',
  interfaceName: 'FormBlock',
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
      blocks: [
        // required
        InputBlock,
        ButtonBlock,
      ],
    },
  ],
}

export default FormBlock
