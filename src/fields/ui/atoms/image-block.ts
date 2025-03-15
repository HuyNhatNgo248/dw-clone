import { Block } from 'payload'

const ImageBlock: Block = {
  slug: 'image',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Make sure the link matches the slug!', // Helper text displayed below the field
      },
    },
  ],
}

export default ImageBlock
