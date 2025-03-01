'use client'

import type { MainMenuItem, Media } from '@/payload-types'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { forwardRef, RefObject, Fragment } from 'react'
import Icon from '@/components/atoms/icon'
import Link from 'next/link'
import PayloadImage from '@/components/shared/payload-image'

interface SubMenuDrawerProps {
  className?: string
  subDrawerOpen: boolean
  setSubDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  mainMenuItem: MainMenuItem | null
}

const SubMenuDrawer = forwardRef<HTMLDivElement, SubMenuDrawerProps>(
  ({ className, subDrawerOpen, setSubDrawerOpen, mainMenuItem }, ref) => {
    const container = (ref as RefObject<HTMLDivElement>)?.current || null

    if (!mainMenuItem) return null

    const { categoryTitle } = mainMenuItem

    return (
      <div className={className}>
        <Drawer
          direction="right"
          open={subDrawerOpen}
          onOpenChange={setSubDrawerOpen}
          container={container}
        >
          <DrawerContent
            classNames={{
              overlay: 'hidden',
            }}
            className="bg-white w-full data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-full data-[vaul-drawer-direction=right]:max-w-full"
          >
            <DrawerHeader className="p-6">
              <div className="flex justify-between items-center">
                <DrawerClose asChild>
                  <button className="cursor-pointer">
                    <Icon path="lu/LuChevronLeft" className="size-6" />
                  </button>
                </DrawerClose>

                <DrawerTitle>{categoryTitle || 'メニュー'}</DrawerTitle>

                <span />
              </div>
              <DrawerDescription className="hidden">Menu</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col py-3 overflow-y-auto">
              {mainMenuItem.subcategories?.map((item, index) => (
                <Fragment key={`${item.id}-${index}`}>
                  {item.subcategoryTitle && (
                    <p className="px-6 py-3 text-sm text-gray-500">{item.subcategoryTitle}</p>
                  )}
                  {item.layout?.map((item, index) => {
                    if (item.blockType === 'list-item') {
                      return (
                        <Link
                          key={`sub-menu-${item.id}-${item.blockType}-${index}`}
                          href={item.link || '/'}
                          className="px-6 py-3"
                        >
                          {item.text}
                        </Link>
                      )
                    } else if (item.blockType === 'image') {
                      return (
                        <Link
                          href={item.link || '/'}
                          key={`sub-menu-${item.id}-${item.blockType}-${index}`}
                        >
                          <div className="w-full max-h-full overflow-hidden mb-1 last:pb-0 relative">
                            {item.image && (
                              <PayloadImage
                                {...(item.image as Media)}
                                className="scale-img"
                                priority={true}
                              />
                            )}

                            {item.caption && (
                              <p className="absolute left-1/2 -translate-x-1/2 bottom-[5%] tracking-wide">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        </Link>
                      )
                    }

                    return null
                  })}

                  {index < (mainMenuItem.subcategories || []).length - 1 && (
                    <div className="w-full px-6 py-3">
                      <div className="w-full border-[0.75px] border-gray-300" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    )
  },
)

SubMenuDrawer.displayName = 'SubMenuDrawer'

export default SubMenuDrawer
