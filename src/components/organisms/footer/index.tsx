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

  return (
    <div
      className={cn(
        'px-8 md:py-24 md:px-12 py-12 w-full bg-gray-100 flex flex-col md:gap-24 gap-16',
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
      <div className="flex gap-4 md:justify-start justify-center">
        {socialMedia &&
          socialMedia.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <Link href={item.link || '/'}>
                {item.iconField && <Icon path={item.iconField} className="w-6 h-6 stroke-1" />}
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Footer
