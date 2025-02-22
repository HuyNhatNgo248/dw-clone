import type { Where, CollectionSlug } from 'payload'

import { getPayload } from 'payload'
import config from '@/payload.config'

const payloadConfig = await config

export const payload = await getPayload({ config: payloadConfig })

export const fetchPage = async (slug: string, query?: Where) => {
  const result = await payload.find({
    collection: 'pages' as CollectionSlug,
    where: {
      slug: {
        equals: slug,
      },
      ...(query || {}),
    },
  })

  if (result.totalDocs === 0) {
    return null
  }

  return result.docs[0]
}
