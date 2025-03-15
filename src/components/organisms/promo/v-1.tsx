import type { PromoBlock, Media } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { RichText } from '@payloadcms/richtext-lexical/react'
import PayloadImage from '@/components/shared/payload-image'
import { cn } from '@/lib/utils'

interface PromoV1Props extends PromoBlock {
  className?: string
}

const PromoV1: React.FC<PromoV1Props> = ({ className, layout, body, heading }) => {
  const imageData = layout?.find((item) => item.blockType === 'image')?.image

  return (
    <div className={cn('grid md:grid-cols-2 grid-cols-1 w-container gap-12 md:pb-24', className)}>
      {imageData && <PayloadImage {...(imageData as Media)} />}

      <div className="flex flex-col justify-center gap-4 md:items-start items-center pb-12 md:pb-0">
        {heading && <p className="text-2xl font-bold">{heading}</p>}

        {body && <RichText data={body as SerializedEditorState} className="font-light w-[80%]" />}
      </div>
    </div>
  )
}

export default PromoV1
