import type { NavigationBar, FirstLevelBlock, SecondLevelBlock } from '@/payload-types'

import Icon from '../atoms/icon'
import { cn } from '@/lib/utils'

interface NavigationBarProps extends NavigationBar {
  className?: string
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className, layout }) => {
  if (!layout) return null

  const [level1, level2] = (layout?.[0]?.layout || []) as [
    FirstLevelBlock | null,
    SecondLevelBlock | null,
  ]

  if (!level1 || !level2) return null

  return (
    <div className={cn('px-8 shadow-md bg-white', className)}>
      {/* 1st level */}
      <div className="flex md:justify-between justify-center items-center md:py-4 py-2">
        <div className="hidden md:flex gap-6 items-center">
          {level1.leftIconList?.map(
            (icon, index) =>
              icon.iconField && (
                <button className="cursor-pointer" key={`${icon.iconField}-${index}`}>
                  <Icon path={icon.iconField} className="size-6 stroke-1" />
                </button>
              ),
          )}
        </div>

        <div className="lg:text-3xl md:text-2xl text-xl font-semibold tracking-wider">
          {level1.title}
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {level1.rightIconList?.map((icon, index) => (
            <button className="cursor-pointer" key={`${icon.iconField}-${index}`}>
              {icon.iconField && <Icon path={icon.iconField} className="size-6 stroke-1" />}
            </button>
          ))}
        </div>
      </div>

      {/* 2nd level */}
      <div className="lg:flex justify-center md:py-4 py-2 hidden">
        <div className="flex gap-8">
          {level2.layout?.map((item, index) => (
            <button
              className="cursor-pointer text-sm font-light"
              key={`${item.blockName}-${index}`}
            >
              {item.blockName}
            </button>
          ))}
        </div>
      </div>

      <div className="flex md:hidden justify-between py-4">
        {level1.leftIconList?.map((icon, index) => (
          <button className="cursor-pointer" key={`${icon.iconField}-${index}`}>
            {icon.iconField && <Icon path={icon.iconField} className="size-6 stroke-1" />}
          </button>
        ))}
        {level1.rightIconList?.map((icon, index) => (
          <button className="cursor-pointer" key={`${icon.iconField}-${index}`}>
            {icon.iconField && <Icon path={icon.iconField} className="size-6 stroke-1" />}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavigationBar
