import { Block } from 'payload'

const IntroductionTextBlock: Block = {
  slug: 'Introduction Text',
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
