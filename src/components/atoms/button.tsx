import type { ButtonBlock } from '@/payload-types'

import { Button } from '@/components/ui/button'
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

export default function CustomButton({
  text,
  link,
  variant = 'primary',
  size = 'medium',
  icon,
  openInNewTab = false,
  id,
  classNames,
  ...props
}: ButtonProps) {
  const button = (
    <Button
      id={id || undefined}
      asChild
      {...props}
      className={cn(
        'transition-all rounded-md', // base button styling
        // Variant styles
        variant === 'primary' && 'bg-black text-white hover:bg-gray-800',
        variant === 'secondary' && 'bg-gray-500 text-white hover:bg-gray-600',
        variant === 'tertiary' && 'bg-transparent border border-black text-black hover:bg-gray-100',
        // Size styles
        size === 'small' && 'px-3 py-1 text-sm',
        size === 'medium' && 'px-4 py-2 text-base',
        size === 'large' && 'px-6 py-3 text-lg',
        classNames?.button,
      )}
    >
      {icon && <Icon path={icon} className={classNames?.icon} />}
      {text}
    </Button>
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
