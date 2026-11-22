import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // New uploads only: cap the stored original at 2000px and store it as WebP (multi-MB PNGs made
    // every first image request slow). Existing files are untouched.
    resizeOptions: { width: 2000, withoutEnlargement: true },
    formatOptions: { format: 'webp', options: { quality: 82 } },
  },
}
