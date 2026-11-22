import type { NavigationBar, FirstLevelBlock, SecondLevelBlock } from '@/payload-types'

import { cn } from '@/lib/utils'
import FirstLevelNavBar from './_components/first-level-nav-bar'
import SecondLevelNavBar from './_components/second-level-nav-bar'
import NavigationDrawer from './_components/navigation-drawer'

interface NavigationBarProps extends NavigationBar {
  className?: string
}

// Server component on purpose: FirstLevelNavBar renders CMS-chosen <Icon>s, which pull in the
// whole react-icons/lu set if they end up in a client component.
const NavigationBar: React.FC<NavigationBarProps> = ({ className, layout, navigationMenu }) => {
  if (!layout) return null

  const [level1, level2] = (layout?.[0]?.layout || []) as [
    FirstLevelBlock | null,
    SecondLevelBlock | null,
  ]

  if (!level1 || !level2) return null

  return (
    <div className={cn('px-8 shadow-md bg-white', className)}>
      <NavigationDrawer
        navigationMenu={
          navigationMenu && typeof navigationMenu !== 'number' ? navigationMenu : null
        }
      >
        <FirstLevelNavBar {...level1} />
        <SecondLevelNavBar {...level2} />
      </NavigationDrawer>
    </div>
  )
}

export default NavigationBar
