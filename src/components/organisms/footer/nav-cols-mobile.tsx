import type { FooterBlock } from '@/payload-types'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface NavColsMobileProps {
  navColumns: NonNullable<FooterBlock['navColumns']>
  classNames?: {
    container?: string
  }
}

const NavColsMobile: React.FC<NavColsMobileProps> = ({ navColumns, classNames }) => {
  return (
    <Accordion type="multiple" className={cn(classNames?.container)}>
      {navColumns.map((col, index) => (
        <AccordionItem key={`${col.id}-${index}`} value={`value-${index}`} className="border-none">
          <AccordionTrigger className="font-bold hover:no-underline">{col.title}</AccordionTrigger>

          <AccordionContent className="flex flex-col gap-2">
            {col.layout?.map((item, index) => (
              <div key={`${item.text}-${index}`}>
                <Link href={item.link || '/'} className="text-sm font-light">
                  {item.text}
                </Link>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default NavColsMobile
