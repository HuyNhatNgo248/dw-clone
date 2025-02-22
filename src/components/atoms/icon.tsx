import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
  path: string
  className?: string
}

const Icon = ({ path, className }: IconProps) => {
  const [prefix, iconName] = path.split('/')

  if (!prefix || !iconName) {
    return null
  }

  return <FontAwesomeIcon className={className} icon={{ prefix, iconName } as IconProp} />
}

export default Icon
