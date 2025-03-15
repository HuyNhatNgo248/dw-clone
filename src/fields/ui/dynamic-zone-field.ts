import { Field } from 'payload'

import HeroBlock from '@/fields/ui/organisms/hero-block'
import PromoBlock from '@/fields/ui/organisms/promo-block'
import ProductGridBlock from '@/fields/ui/organisms/product-grid-block'
import IntroductionTextBlock from './organisms/introduction-text-block'
import ProductCategoriesBlock from './organisms/product-collection-block'

const DynamicZoneField: Field = {
  name: 'dynamicZone',
  type: 'blocks',
  blocks: [HeroBlock, PromoBlock, ProductGridBlock, IntroductionTextBlock, ProductCategoriesBlock],
}

export default DynamicZoneField
