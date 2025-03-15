import { Block } from 'payload'

const IntroductionTextBlock: Block = {
  slug: 'Introduction Text Block',
  interfaceName: 'IntroductionTextBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}

export default IntroductionTextBlock
