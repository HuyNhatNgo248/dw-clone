import { Block, CollectionSlug } from 'payload'

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
    {
      name: 'productCategories',
      type: 'relationship',
      relationTo: 'product-categories' as CollectionSlug,
      hasMany: true,
    },
  ],
}

export default ProductCategoriesGridBlock
