import type { Where, CollectionSlug } from 'payload'

import { getPayload } from 'payload'
import config from '@/payload.config'

const payloadConfig = await config

export const payload = await getPayload({ config: payloadConfig })

export const fetchPage = async (slug: string | null, query?: Where, depth?: number) => {
  const result = await payload.find({
    collection: 'pages',
    depth: depth || 2,
    where: {
      slug: {
        contains: slug,
      },
      ...(query || {}),
    },
  })

  if (result.totalDocs === 0) {
    return null
  }

  return result.docs[0]
}

export const fetchCollection = async (
  collection: CollectionSlug,
  query?: Where,
  depth?: number,
) => {
  const result = await payload.find({
    collection,
    depth: depth || 2,
    where: {
      ...(query || {}),
    },
  })

  if (result.totalDocs === 0) {
    return null
  }

  return result.docs
}
