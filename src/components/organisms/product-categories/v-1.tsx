import type { ProductCategoriesBlock } from '@/payload-types'

interface ProductCategoriesV1Props extends ProductCategoriesBlock {
  className?: string
}

const ProductCategoriesV1: React.FC<ProductCategoriesV1Props> = ({
  className,
  productCategories,
}) => {
  console.log(productCategories)
  return <div></div>
}

export default ProductCategoriesV1
