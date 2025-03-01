import type { SecondLevelBlock } from '@/payload-types'

import { cn } from '@/lib/utils'
import { DrawerTrigger } from '@/components/ui/drawer'
import Link from 'next/link'

interface SecondLevelNavBarProps extends SecondLevelBlock {
  className?: string
}

const SecondLevelNavBar: React.FC<SecondLevelNavBarProps> = ({ className, layout }) => {
  return (
    <div className={cn('md:flex justify-center md:py-4 py-2 hidden', className)}>
      <div className="flex gap-8">
        {layout?.map((item, index) =>
          item.type === 'menu-trigger' ? (
            <DrawerTrigger key={`drawer-trigger-${item.blockName}-${index}`}>
              <div className="cursor-pointer text-sm font-light">{item.text}</div>
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
