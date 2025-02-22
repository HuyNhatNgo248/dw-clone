import { CollectionConfig, CollectionSlug } from 'payload'

import DynamicZoneField from '@/fields/ui/dynamic-zone-field'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure the slug is unique across all entries
      admin: {
        position: 'sidebar', // Optional: Display it in the sidebar for better UX
      },
    },
    {
      name: 'serviceOffers',
      type: 'relationship',
      relationTo: 'service-offers' as CollectionSlug,
      hasMany: false,
    },
    {
      name: 'navigationBar',
      type: 'relationship',
      relationTo: 'navigation-bars' as CollectionSlug,
      hasMany: false,
    },

    DynamicZoneField,

    {
      name: 'footer',
      type: 'relationship',
      relationTo: 'footers' as CollectionSlug,
      hasMany: false,
    },
  ],
}
