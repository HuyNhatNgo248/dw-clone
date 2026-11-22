'use client'

import type { NavigationMenu } from '@/payload-types'

import { Drawer } from '@/components/ui/drawer'
import { useState, useEffect } from 'react'
import MenuDrawerContent from './menu-drawer-content'
import { useOpenSubMenu } from '../_hooks/use-open-submenu'

interface NavigationDrawerProps {
  navigationMenu: NavigationMenu | null
  children: React.ReactNode
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ navigationMenu, children }) => {
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false)
  const selectedMainMenu = useOpenSubMenu((state) => state.selectedMainMenu)
  const setSelectedMainMenu = useOpenSubMenu((state) => state.setSelectedMainMenu)

  useEffect(() => {
    if (selectedMainMenu) setMainDrawerOpen(true)
  }, [selectedMainMenu])

  useEffect(() => {
    if (!mainDrawerOpen) {
      setSelectedMainMenu(null)
    }
  }, [mainDrawerOpen, setSelectedMainMenu])

  return (
    <Drawer direction="left" open={mainDrawerOpen} onOpenChange={setMainDrawerOpen}>
      {children}

      {navigationMenu && (
        <MenuDrawerContent {...navigationMenu} setMainDrawerOpen={setMainDrawerOpen} />
      )}
    </Drawer>
  )
}

export default NavigationDrawer
