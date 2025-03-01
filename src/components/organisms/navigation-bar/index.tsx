'use client'

import type { NavigationBar, FirstLevelBlock, SecondLevelBlock } from '@/payload-types'

import { cn } from '@/lib/utils'
import { Drawer } from '@/components/ui/drawer'
import { useState } from 'react'
import FirstLevelNavBar from './_components/first-level-nav-bar'
import SecondLevelNavBar from './_components/second-level-nav-bar'
import MenuDrawerContent from './_components/menu-drawer-content'

interface NavigationBarProps extends NavigationBar {
  className?: string
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className, layout, navigationMenu }) => {
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false)

  if (!layout) return null

  const [level1, level2] = (layout?.[0]?.layout || []) as [
    FirstLevelBlock | null,
    SecondLevelBlock | null,
  ]

  if (!level1 || !level2) return null

  return (
    <div className={cn('px-8 shadow-md bg-white', className)}>
      <Drawer direction="left" open={mainDrawerOpen} onOpenChange={setMainDrawerOpen}>
        {level1 && <FirstLevelNavBar {...level1} />}
        {level2 && <SecondLevelNavBar {...level2} />}

        {navigationMenu && typeof navigationMenu !== 'number' && (
          <MenuDrawerContent {...navigationMenu} />
        )}
      </Drawer>
    </div>
  )
}

export default NavigationBar
