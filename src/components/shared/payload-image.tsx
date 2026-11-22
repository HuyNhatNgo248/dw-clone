import type { Media } from '@/payload-types'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PayloadImageProps extends Media {
  className?: string
  priority?: boolean
  /** Rendered width of the slot, e.g. "(min-width: 1024px) 25vw, 50vw". Without it the full original is downloaded. */
  sizes: string
}

const PayloadImage: React.FC<PayloadImageProps> = ({
  className,
  url,
  alt,
  width,
  height,
  priority = false,
  sizes,
}) => {
  if (!url || !alt || !width || !height) return null

  // url is the direct Blob CDN URL in production and /api/media/file/... (local disk) in dev
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={cn('w-full h-full object-cover', className)}
      priority={priority}
    />
  )
}

export default PayloadImage
