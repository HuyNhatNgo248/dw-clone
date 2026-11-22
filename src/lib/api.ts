import type { Where, CollectionSlug } from 'payload'

import { getPayload } from 'payload'
import config from '@/payload.config'

const payloadConfig = await config

export const payload = await getPayload({ config: payloadConfig })

export const fetchPage = async (slug: string | null, query?: Where, depth?: number) => {
  const result = await payload.find({
    collection: 'pages',
    depth: depth ?? 2,
    limit: 1,
    pagination: false, // skips the extra COUNT query
    where: {
      slug: {
        equals: slug,
      },
      ...(query || {}),
    },
  })

  return result.docs[0] ?? null
}

export const fetchCollection = async (
  collection: CollectionSlug,
  query?: Where,
  depth?: number,
) => {
  // shortcut: returns every match (Payload's default page size of 10 silently capped product grids);
  // add real pagination if a category grows to hundreds of products
  const result = await payload.find({
    collection,
    depth: depth ?? 2,
    pagination: false,
    where: {
      ...(query || {}),
    },
  })

  return result.docs.length ? result.docs : null
}
