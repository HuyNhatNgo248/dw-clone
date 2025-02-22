import { CollectionConfig } from 'payload'
import ListItemBlock from '@/fields/ui/molecules/list-item'

export const ServiceOffers: CollectionConfig = {
  slug: 'service-offers',
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
      maxRows: 10,
      blocks: [ListItemBlock],
    },
  ],
}
