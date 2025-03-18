'use client'

import type { NavigationMenu, MainMenuItem } from '@/payload-types'

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import React, { useState, useRef, useEffect, Fragment } from 'react'
import Icon from '@/components/atoms/icon'
import Link from 'next/link'
import SubMenuDrawer from './sub-menu-drawer'
import { useOpenSubMenu } from '../../_hooks/use-open-submenu'

interface MenuDrawerContentProps extends NavigationMenu {
  className?: string
  setMainDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuDrawerContent: React.FC<MenuDrawerContentProps> = ({
  className,
  layout,
  title,
  setMainDrawerOpen,
}) => {
  const [subDrawerOpen, setSubDrawerOpen] = useState(false)
  const [mainMenuItem, setMainMenuItem] = useState<MainMenuItem | null>(null)
  const outerDrawerContentRef = useRef<HTMLDivElement>(null)
  const selectedMainMenu = useOpenSubMenu((state) => state.selectedMainMenu)
  const setSelectedMainMenu = useOpenSubMenu((state) => state.setSelectedMainMenu)

  useEffect(() => {
    if (selectedMainMenu) {
      setTimeout(() => {
        setSubDrawerOpen(true)
        setMainMenuItem(selectedMainMenu)
      }, 350)
    }
  }, [selectedMainMenu])

  useEffect(() => {
    if (!subDrawerOpen) {
      setSelectedMainMenu(null)
    }
  }, [subDrawerOpen, setSelectedMainMenu])

  return (
    <div className={className}>
      <DrawerContent
        className="bg-white font-thin overflow-hidden data-[vaul-drawer-direction=left]:sm:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=left]:w-full data-[vaul-drawer-direction=left]:max-w-full"
        ref={outerDrawerContentRef}
      >
        <DrawerHeader className="p-6">
          <div className="flex justify-between items-center">
            <DrawerTitle>{title || 'メニュー'}</DrawerTitle>

            <DrawerClose asChild>
              <button className="cursor-pointer">
                <Icon path="lu/LuX" className="size-6 stroke-1" />
              </button>
            </DrawerClose>
          </div>
          <DrawerDescription className="hidden">Menu</DrawerDescription>
        </DrawerHeader>

        <div className="py-6 flex flex-col gap-6">
          {layout?.map((item, index) => (
            <Fragment key={`fragment-${item.id}-${index}`}>
              {item.layout?.map((item, index) => {
                if (item.blockType === 'list-item') {
                  return (
                    <Link
                      onClick={() => setMainDrawerOpen(false)}
                      className="px-6"
                      href={item.link || '/'}
                      key={`link-${item.id}-${index}`}
                    >
                      {item.text}
                    </Link>
                  )
                }

                if (item.blockType === 'main-menu-item') {
                  return (item.mainMenuItems as MainMenuItem[] | null)?.map((item, index) => (
                    <div
                      key={`main-menu-item-${item.id}-${index}`}
                      className="flex justify-between items-center px-6 cursor-pointer"
                      onClick={() => {
                        setSubDrawerOpen(true)
                        setMainMenuItem(item)
                      }}
                    >
                      <p>{item.categoryTitle}</p>

                      <Icon path="lu/LuChevronRight" className="size-6" />
                    </div>
                  ))
                }

                return null
              })}

              {index < layout.length - 1 && (
                <div className="w-full">
                  <div className="w-full border-[0.75px] border-gray-300" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <SubMenuDrawer
          setMainDrawerOpen={setMainDrawerOpen}
          subDrawerOpen={subDrawerOpen}
          setSubDrawerOpen={setSubDrawerOpen}
          mainMenuItem={mainMenuItem}
          ref={outerDrawerContentRef}
        />
      </DrawerContent>
    </div>
  )
}

export default MenuDrawerContent
