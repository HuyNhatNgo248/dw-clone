import type { PromoBlock } from '@/payload-types'

interface PromoV2Props extends PromoBlock {
  className?: string
}

const PromoV2: React.FC<PromoV2Props> = ({ className }) => {
  return <div></div>
}

export default PromoV2
