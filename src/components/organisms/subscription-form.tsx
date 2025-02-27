import type { SubscriptionForm } from '@/payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import Button from '../atoms/button'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface SubscriptionFormProps extends SubscriptionForm {
  className?: string
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className, layout }) => {
  if (!layout) return null

  const { heading, subheading, privacyStatement, layout: formLayout } = layout[0] || {}

  const inputData = formLayout?.[0].layout?.find((item) => item.blockType === 'Input')
  const buttonData = formLayout?.[0].layout?.find((item) => item.blockType === 'Button')

  return (
    <div className={cn('py-container w-full border-y-1 border-gray-200', className)}>
      <div className="mx-auto flex flex-col justify-center items-center gap-4 md:w-[500px] w-[90%]">
        {heading && <p className="font-bold text-center">{heading}</p>}
        {subheading &&
          subheading.map((item, index) => (
            <p className="font-light text-center" key={`${item.id}-${index}`}>
              {item.text}
            </p>
          ))}

        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <div className="flex gap-4 justify-center w-full">
            {inputData && (
              <Input
                type={inputData.type}
                placeholder={inputData.placeholder || ''}
                className="border-gray-200 shadow-none rounded-none"
              />
            )}
            {buttonData && <Button {...buttonData} />}
          </div>

          <RichText
            data={privacyStatement as SerializedEditorState}
            className="text-xs font-light text-center w-[70%]"
          />
        </div>
      </div>
    </div>
  )
}

export default SubscriptionForm
