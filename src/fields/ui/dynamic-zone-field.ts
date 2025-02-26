import { Field } from 'payload'

import HeroBlock from '@/fields/ui/organisms/hero-block'
import PromoBlock from '@/fields/ui/organisms/promo-block'
import ProductGridBlock from '@/fields/ui/organisms/product-grid-block'

const DynamicZoneField: Field = {
  name: 'dynamicZone',
  type: 'blocks',
  blocks: [HeroBlock, PromoBlock, ProductGridBlock],
}

export default DynamicZoneField
