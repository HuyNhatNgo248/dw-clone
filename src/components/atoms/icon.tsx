import { cn } from '@/lib/utils'
import * as Lu from 'react-icons/lu'

// Looks icons up by CMS name, so it needs every Lucide icon: render it only from server
// components. Client components should use lucide-react: the admin's icon-select imports all of
// react-icons/lu, so any client import of that module ships the whole 689 KB set.

interface IconProps {
  path: string
  className?: string
}

const Icon = ({ path, className }: IconProps) => {
  if (!path) return null
  const [_, iconName] = path.split('/')

  const IconComponent = (Lu as Record<string, React.ComponentType<{ className?: string }>>)[
    iconName
  ]

  return IconComponent ? <IconComponent className={cn('w-4 h-4 stroke-1', className)} /> : null
}

export default Icon
