import type {
  ServiceOffer as ServiceOfferType,
  NavigationBar as NavigationBarType,
  Footer as FooterType,
  SubscriptionForm as SubscriptionFormType,
  Page as PageType,
} from '@/payload-types'

import { fetchPage } from '@/lib/api'
import { notFound } from 'next/navigation'
import { extractComponent } from '@/lib/utils'
import ServiceOffers from '@/components/organisms/service-offers'
import NavigationBar from '@/components/organisms/navigation-bar'
import Footer from '@/components/organisms/footer'
import SubscriptionForm from '@/components/organisms/subscription-form'
import DynamicZone from '@/components/organisms/dynamic-zone'
import { cn } from '@/lib/utils'

interface CmsPageProps {
  slug: string
  className?: string
  zoneClassName?: string
}

export default async function CmsPage({ slug, className, zoneClassName }: CmsPageProps) {
  // depth 4 = page -> navigationBar -> navigationMenu -> mainMenuItems -> media (deepest chain)
  const data = await fetchPage(slug, {}, 4)

  if (data === null) return notFound()

  const serviceOffers = extractComponent('serviceOffers', data) as ServiceOfferType | null
  const navigationBar = extractComponent('navigationBar', data) as NavigationBarType | null
  const subscriptionForm = extractComponent('subscriptionForm', data) as SubscriptionFormType | null
  const footer = extractComponent('footer', data) as FooterType | null
  const dynamicZone = extractComponent('dynamicZone', data) as PageType['dynamicZone'] | null

  return (
    <div className={cn('w-full', className)}>
      {serviceOffers && <ServiceOffers {...serviceOffers} />}
      {navigationBar && <NavigationBar {...navigationBar} className="top-0 sticky z-50" />}
      {dynamicZone && <DynamicZone zone={dynamicZone} classNames={{ container: zoneClassName }} />}
      {subscriptionForm && <SubscriptionForm {...subscriptionForm} />}
      {footer && <Footer {...footer} />}
    </div>
  )
}
