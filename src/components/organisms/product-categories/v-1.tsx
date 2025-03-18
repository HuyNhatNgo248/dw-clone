import type {
  ProductCategoriesBlock,
  ProductCategory,
  Product,
  ProductVariant,
  Media,
} from '@/payload-types'

import { fetchCollection } from '@/lib/api'
import PayloadImage from '@/components/shared/payload-image'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { COLORS } from '@/lib/utils'

interface ProductCategoriesV1Props extends ProductCategoriesBlock {
  className?: string
}

const ProductCategoriesV1: React.FC<ProductCategoriesV1Props> = async ({
  className,
  productCategories,
}) => {
  if (!productCategories) return null

  const data = await fetchCollection(
    'products',
    {
      categories: {
        equals: (productCategories[0] as ProductCategory).id,
      },
    },
    5,
  )

  const colorOrder = Object.keys(COLORS)

  return (
    <div className={cn('grid lg:grid-cols-4 grid-cols-2 gap-2 w-container w-[95%]!', className)}>
      {data &&
        (data as Product[]).map((product, index) => {
          console.log(product.variants)

          const variant = product.variants[0] as ProductVariant
          const imageData1 = variant.images?.[0]?.image
          const imageData2 = variant.images?.[1]?.image

          if (!imageData1 || !imageData2) return null

          const colors = product.variants.map((variant) => (variant as ProductVariant).color)
          const sortedColors = colors.sort((a, b) => colorOrder.indexOf(a) - colorOrder.indexOf(b))

          return (
            <Link
              href={'/'}
              key={`${product.id}-${index}`}
              className="bg-gray-100 group relative overflow-hidden"
            >
              <div className="w-full aspect-square relative">
                {/* First Image */}
                <div className="absolute inset-0 transition-all duration-800 ease-in-out transform scale-100 group-hover:scale-110">
                  <PayloadImage
                    {...(imageData1 as Media)}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                  />
                </div>

                {/* Second Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  <PayloadImage {...(imageData2 as Media)} className="w-full h-full object-cover" />
                </div>

                <div className="md:block hidden absolute top-[5%] right-[5%]">
                  <p className="uppercase font-thin text-xs">{COLORS[variant.color]}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 px-4 pt-8 pb-6">
                <p className="font-thin capitalize text-sm">{variant.name}</p>

                <div className="flex gap-1">
                  {sortedColors.map((color, index) => (
                    <div
                      key={`${color}-${index}`}
                      className={cn('p-1', {
                        'border-1 rounded-full': variant.color === color,
                      })}
                    >
                      <div className="size-4 rounded-full" style={{ backgroundColor: color }} />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-thin">¥ {formatPrice(variant.price)}</p>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default ProductCategoriesV1
