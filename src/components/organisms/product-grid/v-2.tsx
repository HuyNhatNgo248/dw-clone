import type { ProductGridBlock, Media } from '@/payload-types'

import PayloadImage from '@/components/shared/payload-image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ProductGridV2Props extends ProductGridBlock {
  className?: string
}

const ProductGridV2: React.FC<ProductGridV2Props> = ({ className, layout }) => {
  return (
    <div className={cn('w-container grid lg:grid-cols-2 grid-cols-1 gap-2', className)}>
      {layout?.map((item, index) => (
        <Link key={`${item.id}-${index}`} href={item.link || '/'}>
          <div className="w-full relative overflow-hidden">
            {item.image && <PayloadImage {...(item.image as Media)} className="scale-img" />}

            {item.caption && (
              <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold lg:text-4xl sm:text-2xl text-xl tracking-wide whitespace-nowrap text-white">
                {item.caption}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGridV2
