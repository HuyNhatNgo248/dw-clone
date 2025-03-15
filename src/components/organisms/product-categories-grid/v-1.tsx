'use client'

import type { ProductCategoriesGridBlock, Media, ProductCategory } from '@/payload-types'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { useState } from 'react'
import PayloadImage from '@/components/shared/payload-image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CarouselNext, CarouselPrev } from '@/components/molecues/carousel'
import { extractImage } from './helpers'

interface ProductCategoriesGridV1Props extends ProductCategoriesGridBlock {
  className?: string
}

const ProductCategoryItem: React.FC<{ item: ProductCategory }> = ({ item }) => {
  const imageData = extractImage(item.representationImage)

  if (!imageData) return null

  return (
    <Link href={imageData.link || '/'}>
      <div className="w-full relative overflow-hidden">
        {imageData.image && <PayloadImage {...(imageData.image as Media)} className="scale-img" />}

        {imageData.caption && (
          <p className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-thin sm:text-sm text-xs tracking-wide whitespace-nowrap">
            {imageData.caption}
          </p>
        )}
      </div>
    </Link>
  )
}

const ProductCategoriesGridV1: React.FC<ProductCategoriesGridV1Props> = ({
  className,
  heading,
  subheading,
  productCategories,
  displayCarousel,
}) => {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <div className={cn('w-container flex flex-col gap-4', className)}>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          {subheading && <p className="text-sm">{subheading}</p>}
          {heading && <p className="text-xl font-bold">{heading}</p>}
        </div>

        {displayCarousel && (
          <div className="sm:flex gap-2 hidden">
            <CarouselPrev api={api} />
            <CarouselNext api={api} />
          </div>
        )}
      </div>

      {displayCarousel && (
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent>
            {(productCategories as ProductCategory[] | null)?.map((item, index) => {
              const imageData = extractImage(item.representationImage)

              if (!imageData) return null

              return (
                <CarouselItem key={index} className="pl-2 lg:basis-1/4 basis-1/2">
                  <ProductCategoryItem item={item} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      )}

      {!displayCarousel && (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
          {(productCategories as ProductCategory[] | null)?.map((item, index) => (
            <ProductCategoryItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductCategoriesGridV1
