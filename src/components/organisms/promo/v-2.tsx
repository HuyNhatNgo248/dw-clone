import type { PromoBlock, Media, ButtonBlock } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import PayloadRichText from '@/components/shared/payload-richtext'
import PayloadImage from '@/components/shared/payload-image'
import { cn } from '@/lib/utils'
import Button from '@/components/atoms/button'

interface PromoV2Props extends PromoBlock {
  className?: string
}

const PromoV2: React.FC<PromoV2Props> = ({ className, layout, body, heading }) => {
  const imageData = layout?.find((item) => item.blockType === 'image')?.image

  const buttonData = layout?.find((item) => item.blockType === 'Button')
  return (
    <div className={cn('grid md:grid-cols-2 grid-cols-1 w-container gap-12', className)}>
      {imageData && <PayloadImage {...(imageData as Media)} />}

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-4 md:items-start items-center xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%]">
          {heading && <p className="text-xl md:text-left text-center">{heading}</p>}

          {body && (
            <PayloadRichText
              data={body as SerializedEditorState}
              classNames={{ container: 'font-light w-[80%] md:text-left text-center' }}
            />
          )}

          {buttonData && <Button {...(buttonData as ButtonBlock)} />}
        </div>
      </div>
    </div>
  )
}

export default PromoV2
