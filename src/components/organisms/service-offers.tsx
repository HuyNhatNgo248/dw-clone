'use client'

import type { ServiceOffer } from '@/payload-types'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Icon from '../atoms/icon'

interface ServiceOffersProps extends ServiceOffer {
  className?: string
}

const ServiceOffers: React.FC<ServiceOffersProps> = ({ className, layout }) => {
  return (
    <div className={cn('w-full py-2 px-12 flex justify-center bg-gray-100', className)}>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {layout?.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
              <div className="flex gap-2 w-full justify-center items-center font-thin">
                {item.iconField && <Icon path={item.iconField} />}
                {item.blockName && <p>{item.blockName}</p>}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ServiceOffers
