import type { Page } from '@/payload-types'

import { cn } from '@/lib/utils'
import HeroV1 from '@/components/organisms/hero/v-1'
import HeroV3 from '@/components/organisms/hero/v-3'
import ProductCategoriesGridV1 from '@/components/organisms/product-categories-grid/v-1'
import ProductCategoriesGridV2 from '@/components/organisms/product-categories-grid/v-2'
import PromoV1 from '@/components/organisms/promo/v-1'
import PromoV2 from '@/components/organisms/promo/v-2'
import IntroductionTextV1 from '@/components/organisms/introduction-text/v-1'

interface DynamicZoneProps {
  zone: Page['dynamicZone']
  classNames?: {
    container?: string
  }
}

type ComponentMapType = {
  [key: string]: {
    [key: string]:
      | typeof HeroV1
      | typeof HeroV3
      | typeof ProductCategoriesGridV1
      | typeof ProductCategoriesGridV2
      | typeof PromoV1
      | typeof PromoV2
      | typeof IntroductionTextV1
  }
}

const ComponentMap: ComponentMapType = {
  Hero: {
    'v-1': HeroV1,
    'v-3': HeroV3,
  },
  'Product Categories Grid': {
    'v-1': ProductCategoriesGridV1,
    'v-2': ProductCategoriesGridV2,
  },
  Promo: {
    'v-1': PromoV1,
    'v-2': PromoV2,
  },
  'Introduction Text': {
    'v-1': IntroductionTextV1,
  },
}

const DynamicZone: React.FC<DynamicZoneProps> = ({ zone, classNames }) => {
  return (
    <div
      className={cn('flex flex-col xl:gap-24 lg:gap-20 md:gap-16 gap-12', classNames?.container)}
    >
      {zone?.map((item, index) => {
        if (!item.blockType || !item.blockName) return null

        const Component = ComponentMap[item?.blockType]?.[item?.blockName]

        if (!Component) return null

        // @ts-expect-error - This is a dynamic component
        return <Component key={`${item.blockName}-${index}`} {...item} />
      })}
    </div>
  )
}

export default DynamicZone
