import { Block, CollectionSlug } from 'payload'
import GridSettingsField from '@/fields/ui/atoms/grid-settings-field'

const ProductCategoriesGridBlock: Block = {
  slug: 'Product Categories Grid',
  interfaceName: 'ProductCategoriesGridBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subheading',
      type: 'text',
    },

    GridSettingsField({
      name: 'gridSettings',
      label: 'Grid Settings',
    }),
    {
      name: 'productCategories',
      type: 'relationship',
      relationTo: 'product-categories' as CollectionSlug,
      hasMany: true,
    },
  ],
}

export default ProductCategoriesGridBlock
