import type { ProductCategoriesGridBlock, Media, ProductCategory } from '@/payload-types'

import PayloadImage from '@/components/shared/payload-image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { extractImage } from './helpers'

interface ProductCategoriesGridV2Props extends ProductCategoriesGridBlock {
  className?: string
}

const ProductCategoriesGridV2: React.FC<ProductCategoriesGridV2Props> = ({
  className,
  productCategories,
}) => {
  return (
    <div className={cn('w-container grid lg:grid-cols-2 grid-cols-1 gap-2', className)}>
      {(productCategories as ProductCategory[] | null)?.map((item, index) => {
        const imageData = extractImage(item.representationImage)

        if (!imageData) return null

        return (
          <Link key={`${item.id}-${index}`} href={imageData.link || '/'}>
            <div className="w-full relative overflow-hidden">
              {item.representationImage && (
                <PayloadImage {...(imageData.image as Media)} className="scale-img" />
              )}

              {imageData.caption && (
                <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold lg:text-4xl sm:text-2xl text-xl tracking-wide whitespace-nowrap text-white">
                  {imageData.caption}
                </p>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductCategoriesGridV2
