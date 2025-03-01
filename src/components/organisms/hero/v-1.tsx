import type { HeroBlock, Media } from '@/payload-types'
import Button from '@/components/atoms/button'
import PayloadImage from '@/components/shared/payload-image'

interface HeroV1Props extends HeroBlock {
  className?: string
}

const HeroV1: React.FC<HeroV1Props> = ({ className, heading, subheading, layout }) => {
  const imageData = layout?.find((item) => item.blockType === 'image')?.image as Media
  const buttonData = layout?.find((item) => item.blockType === 'Button')

  return (
    <div className={className}>
      <div className="md:h-screen h-[40vh] w-full relative">
        {imageData && imageData.url && (
          <PayloadImage {...imageData} className="object-[24%_center]" priority={true} />
        )}

        <div className="absolute top-1/4 right-[6%] hidden md:flex flex-col justify-center items-center">
          {heading && <p className="font-bold text-5xl mb-8">{heading}</p>}
          {subheading && <p className="text-2xl mb-4 font-light">{subheading}</p>}
          {buttonData && <Button {...buttonData} />}
        </div>
      </div>

      <div className="w-full bg-gray-100 py-12 md:hidden flex flex-col justify-center items-center">
        {heading && <p className="font-bold text-2xl mb-8">{heading}</p>}
        {subheading && <p className="mb-4 font-light">{subheading}</p>}
        {buttonData && <Button {...buttonData} />}
      </div>
    </div>
  )
}

export default HeroV1
