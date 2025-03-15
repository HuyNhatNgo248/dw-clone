import type { Where, CollectionSlug } from 'payload'

import { getPayload } from 'payload'
import config from '@/payload.config'

const payloadConfig = await config

export const payload = await getPayload({ config: payloadConfig })

export const fetchCollection = async (
  collection: CollectionSlug,
  slug: string | null,
  query?: Where,
  depth?: number,
) => {
  if (slug) {
    query ||= {}
    query.slug = {
      contains: slug,
    }
  }

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

  if (collection !== 'pages') {
    return result.docs
  }

  return result.docs[0]
}
