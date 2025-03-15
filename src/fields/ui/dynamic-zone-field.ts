import { Field } from 'payload'

import HeroBlock from '@/fields/ui/organisms/hero-block'
import PromoBlock from '@/fields/ui/organisms/promo-block'
import ProductCategoriesGridBlock from '@/fields/ui/organisms/product-categories-grid-block'
import IntroductionTextBlock from './organisms/introduction-text-block'
import ProductCategoriesBlock from './organisms/product-categories-block'

const DynamicZoneField: Field = {
  name: 'dynamicZone',
  type: 'blocks',
  blocks: [
    HeroBlock,
    PromoBlock,
    ProductCategoriesGridBlock,
    ProductCategoriesBlock,
    IntroductionTextBlock,
  ],
}

export default DynamicZoneField
