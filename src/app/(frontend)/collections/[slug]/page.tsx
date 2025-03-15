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

export default async function CollectionProductsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const data = await fetchPage(`/collections/${slug}`, {}, 5)

  if (data === null) return notFound()

  const serviceOffers = extractComponent('serviceOffers', data) as ServiceOfferType | null
  const navigationBar = extractComponent('navigationBar', data) as NavigationBarType | null
  const subscriptionForm = extractComponent('subscriptionForm', data) as SubscriptionFormType | null
  const footer = extractComponent('footer', data) as FooterType | null
  const dynamicZone = extractComponent('dynamicZone', data) as PageType['dynamicZone'] | null

  return (
    <div className="w-full">
      <div className="top-0 sticky z-50">
        {serviceOffers && <ServiceOffers {...serviceOffers} />}
        {navigationBar && <NavigationBar {...navigationBar} />}
      </div>
      {dynamicZone && (
        <DynamicZone
          zone={dynamicZone}
          classNames={{
            container: 'pb-container',
          }}
        />
      )}
      {subscriptionForm && <SubscriptionForm {...subscriptionForm} />}
      {footer && <Footer {...footer} />}
    </div>
  )
}
