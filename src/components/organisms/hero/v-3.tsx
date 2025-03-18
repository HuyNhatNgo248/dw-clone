import type { HeroBlock, Media } from '@/payload-types'

import PayloadImage from '@/components/shared/payload-image'
import { cn } from '@/lib/utils'

interface HeroV3Props extends HeroBlock {
  className?: string
}

const HeroV3: React.FC<HeroV3Props> = ({ className, heading, subheading, layout }) => {
  const imageData = layout?.find((item) => item.blockType === 'image')?.image as Media

  return (
    <div className={cn('grid lg:grid-cols-2 grid-cols-1', className)}>
      {imageData && imageData.url && <PayloadImage {...imageData} priority={true} />}

      <div className="bg-gray-100 flex justify-center items-center">
        <div className="flex flex-col justify-center p-8 lg:w-3/5 w-4/5">
          {heading && (
            <p
              className={cn('text-2xl mb-2', {
                'text-center': !subheading,
              })}
            >
              {heading}
            </p>
          )}
          {subheading && <p className="text-sm font-light">{subheading}</p>}
        </div>
      </div>
    </div>
  )
}

export default HeroV3
