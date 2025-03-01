'use client'

import type { SecondLevelBlock, MainMenuItem } from '@/payload-types'

import { cn } from '@/lib/utils'
import { DrawerTrigger } from '@/components/ui/drawer'
import Link from 'next/link'
import { useOpenSubMenu } from '../_hooks/use-open-submenu'

interface SecondLevelNavBarProps extends SecondLevelBlock {
  className?: string
}

const SecondLevelNavBar: React.FC<SecondLevelNavBarProps> = ({ className, layout }) => {
  const setSelectedMainMenu = useOpenSubMenu((state) => state.setSelectedMainMenu)

  return (
    <div className={cn('md:flex justify-center md:py-4 py-2 hidden', className)}>
      <div className="flex gap-8">
        {layout?.map((item, index) =>
          item.type === 'menu-trigger' ? (
            <DrawerTrigger key={`drawer-trigger-${item.blockName}-${index}`}>
              <div
                className="cursor-pointer text-sm font-light"
                onClick={() => setSelectedMainMenu(item.mainMenuItems?.[0] as MainMenuItem)}
              >
                {item.text}
              </div>
            </DrawerTrigger>
          ) : (
            <Link
              key={`link-${item.blockName}-${index}`}
              href={item.link || '/'}
              className="cursor-pointer text-sm font-light"
            >
              {item.text}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

export default SecondLevelNavBar
