import type { FirstLevelBlock, FirstLevelItemBlock } from '@/payload-types'

import { cn } from '@/lib/utils'
import Icon from '@/components/atoms/icon'
import { DrawerTrigger } from '@/components/ui/drawer'
import Link from 'next/link'

interface FirstLevelNavBarProps extends FirstLevelBlock {
  className?: string
}

interface NavIconButtonProps extends FirstLevelItemBlock {
  className?: string
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ className, iconField, link, type }) => {
  if (!iconField) return null

  if (type === 'link')
    return (
      <Link href={link || '/'} className={className}>
        <Icon path={iconField} className="size-6" />
      </Link>
    )

  return (
    <DrawerTrigger>
      <div className={cn('cursor-pointer', className)}>
        <Icon path={iconField} className="size-6" />
      </div>
    </DrawerTrigger>
  )
}

const FirstLevelNavBar: React.FC<FirstLevelNavBarProps> = ({
  className,
  leftIconList,
  rightIconList,
  title,
}) => {
  return (
    <>
      {/* Desktop screen */}
      <div
        className={cn(
          'flex md:justify-between justify-center items-center md:py-4 py-2',
          className,
        )}
      >
        <div className="hidden md:flex gap-6 items-center">
          {leftIconList?.map((icon, index) => (
            <NavIconButton {...icon} key={`${icon.iconField}-${index}-1`} />
          ))}
        </div>

        <div className="lg:text-3xl md:text-2xl text-xl font-semibold tracking-wider">{title}</div>

        <div className="hidden md:flex gap-6 items-center">
          {rightIconList?.map((icon, index) => (
            <NavIconButton {...icon} key={`${icon.iconField}-${index}-2`} />
          ))}
        </div>
      </div>

      {/* Mobile screen */}
      <div className="flex md:hidden justify-between py-4">
        {leftIconList?.map((icon, index) => (
          <NavIconButton {...icon} key={`${icon.iconField}-${index}-3`} />
        ))}
        {rightIconList?.map((icon, index) => (
          <NavIconButton {...icon} key={`${icon.iconField}-${index}-4`} />
        ))}
      </div>
    </>
  )
}

export default FirstLevelNavBar
