import { CollectionConfig } from 'payload'
import SubscriptionFormBlock from '@/fields/ui/organisms/subscription-form-block'

export const SubscriptionForms: CollectionConfig = {
  slug: 'subscription-forms',
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
      maxRows: 20,
      blocks: [SubscriptionFormBlock],
    },
  ],
}
