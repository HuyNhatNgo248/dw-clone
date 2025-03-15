'use client'

import type { Footer } from '@/payload-types'

import { cn } from '@/lib/utils'
import NavColsMobile from './nav-cols-mobile'
import NavColsDesktop from './nav-cols-desktop'
import Icon from '@/components/atoms/icon'
import Link from 'next/link'

interface FooterProps extends Footer {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className, layout }) => {
  if (!layout) return null

  const { navColumns, socialMedia } = layout[0]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        'relative px-8 md:px-12 py-container w-full bg-gray-100 flex flex-col md:gap-24 gap-16',
        className,
      )}
    >
      {navColumns && (
        <NavColsDesktop
          navColumns={navColumns}
          classNames={{
            container: 'hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-8',
          }}
        />
      )}

      {navColumns && (
        <NavColsMobile
          navColumns={navColumns}
          classNames={{
            container: 'md:hidden grid grid-cols-1 gap-4',
          }}
        />
      )}
      {/* Social media */}
      <div className="flex gap-4 md:justify-start justify-center md:pb-0 pb-8">
        {socialMedia &&
          socialMedia.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <Link href={item.link || '/'}>
                {item.iconField && <Icon path={item.iconField} className="w-6 h-6" />}
              </Link>
            </div>
          ))}
      </div>

      <button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full p-4 rounded-t-full bg-white rounded-b-none cursor-pointer"
        onClick={scrollToTop}
      >
        <Icon path="lu/LuArrowUp" className="md:size-8 size-6" />
      </button>
    </div>
  )
}

export default Footer
