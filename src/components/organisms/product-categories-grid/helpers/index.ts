import { ImageBlock } from '@/payload-types'

export const extractImage = (data: ImageBlock[] | null | undefined) => {
  if (!data || !data.length) return null

  return data[0]
}
