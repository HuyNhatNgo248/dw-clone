import type { ButtonBlock } from '@/payload-types'

import { Button as ShadcnButton } from '@/components/ui/button'
import Icon from './icon'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps
  extends ButtonBlock,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'id'> {
  classNames?: {
    button?: string
    icon?: string
  }
}

export default function Button({
  text,
  link,
  variant = 'primary',
  size = 'medium',
  iconField,
  openInNewTab = false,
  id,
  classNames,
  ...props
}: ButtonProps) {
  const { blockName: _blockName, blockType: _blockType, ...buttonProps } = props

  const button = (
    <ShadcnButton
      id={id || undefined}
      {...buttonProps}
      className={cn(
        'transition-all rounded-none cursor-pointer', // base button styling
        // Variant styles

        {
          'bg-black text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
          'bg-transparent border border-black text-black': variant === 'tertiary',
        },
        {
          'px-3 py-1': size === 'small',
          'px-4 py-2': size === 'medium',
          'px-8 py-4': size === 'large',
        },
        classNames?.button,
      )}
    >
      {iconField && <Icon path={iconField} className={classNames?.icon} />}
      {text}
    </ShadcnButton>
  )

  if (!link) {
    return button
  }

  return (
    <Link
      href={link}
      passHref
      target={openInNewTab ? '_blank' : '_self'}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center"
    >
      {button}
    </Link>
  )
}
