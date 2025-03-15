'use client'

import type { ProductCategoriesGridBlock, Media } from '@/payload-types'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { useState } from 'react'
import PayloadImage from '@/components/shared/payload-image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CarouselNext, CarouselPrev } from '@/components/molecues/carousel'

interface ProductGridV1Props extends ProductCategoriesGridBlock {
  className?: string
}

const ProductGridV1: React.FC<ProductGridV1Props> = ({ className, heading, subheading }) => {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <div className={cn('w-container flex flex-col gap-2', className)}>
      {subheading && <p className="text-sm">{subheading}</p>}
      <div className="flex justify-between">
        {heading && <p className="text-xl font-bold">{heading}</p>}

        <div className="sm:flex gap-2 hidden">
          <CarouselPrev api={api} />
          <CarouselNext api={api} />
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        {/* <CarouselContent>
          {layout?.map((item, index) => (
            <CarouselItem key={index} className="pl-2 lg:basis-1/4 basis-1/2">
              <Link href={item.link || '/'}>
                <div className="w-full relative overflow-hidden">
                  {item.image && <PayloadImage {...(item.image as Media)} className="scale-img" />}

                  {item.caption && (
                    <p className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-thin sm:text-sm text-xs tracking-wide whitespace-nowrap">
                      {item.caption}
                    </p>
                  )}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent> */}
      </Carousel>
    </div>
  )
}

export default ProductGridV1
