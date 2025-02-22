import { CollectionConfig } from 'payload'
import FooterBlock from '@/fields/ui/organisms/footer-block'

export const Footers: CollectionConfig = {
  slug: 'footers',
  admin: {
    group: 'Layouts',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 1,
      blocks: [FooterBlock],
    },
  ],
}
