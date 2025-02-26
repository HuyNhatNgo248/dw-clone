import type { FooterBlock } from '@/payload-types'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavColsMobileProps {
  navColumns: NonNullable<FooterBlock['navColumns']>
  classNames?: {
    container?: string
  }
}

const NavColsMobile: React.FC<NavColsMobileProps> = ({ navColumns, classNames }) => {
  return (
    <div className={cn(classNames?.container)}>
      {navColumns.map((col, index) => (
        <div key={`${col.id}-${index}`} className="border-none">
          <p className="font-bold mb-4">{col.title}</p>

          <div className="flex flex-col gap-2">
            {col.layout?.map((item, index) => (
              <div key={`${item.text}-${index}`}>
                <Link href={item.link || '/'} className="text-sm font-light">
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NavColsMobile
