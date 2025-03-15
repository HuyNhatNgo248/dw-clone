import { Block, CollectionSlug } from 'payload'

const ProductCategoriesBlock: Block = {
  slug: 'Product Categories',
  interfaceName: 'ProductCategoriesBlock',
  fields: [
    {
      name: 'productCategories',
      type: 'relationship',
      relationTo: 'product-categories' as CollectionSlug,
      hasMany: true,
    },
  ],
}

export default ProductCategoriesBlock
