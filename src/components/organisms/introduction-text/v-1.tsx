import type { IntroductionTextBlock } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { RichText } from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'

interface IntroductionTextV1Props extends IntroductionTextBlock {
  className?: string
}

const IntroductionTextV1: React.FC<IntroductionTextV1Props> = ({ className, content }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8', className)}>
      {content && (
        <RichText
          data={content as SerializedEditorState}
          className="font-light md:w-[65%] w-[85%] text-sm"
        />
      )}
    </div>
  )
}

export default IntroductionTextV1
