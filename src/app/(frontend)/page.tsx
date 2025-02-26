import type {
  ServiceOffer as ServiceOfferType,
  NavigationBar as NavigationBarType,
  Footer as FooterType,
  SubscriptionForm as SubscriptionFormType,
} from '@/payload-types'

import { fetchPage } from '@/lib/api'
import { notFound } from 'next/navigation'
import { extractComponent } from '@/lib/utils'
import ServiceOffers from '@/components/organisms/service-offers'
import NavigationBar from '@/components/organisms/navigation-bar'
import Footer from '@/components/organisms/footer'
import SubscriptionForm from '@/components/organisms/subscription-form'

export default async function HomePage() {
  const data = await fetchPage('/home-page')

  if (data === null) return notFound()

  console.log(data)

  const serviceOffers = extractComponent('serviceOffers', data) as ServiceOfferType | null
  const navigationBar = extractComponent('navigationBar', data) as NavigationBarType | null
  const subscriptionForm = extractComponent('subscriptionForm', data) as SubscriptionFormType | null
  const footer = extractComponent('footer', data) as FooterType | null

  return (
    <div className="w-full">
      <div className="top-0 sticky">
        {serviceOffers && <ServiceOffers {...serviceOffers} />}
        {navigationBar && <NavigationBar {...navigationBar} />}
      </div>
      {subscriptionForm && <SubscriptionForm {...subscriptionForm} />}
      {footer && <Footer {...footer} />}
    </div>
  )
}
