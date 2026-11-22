import CmsPage from '@/components/shared/cms-page'

// Re-render from the CMS at most once a minute, so edits show up without a redeploy
export const revalidate = 60

// Empty list = render each collection on its first request, then cache it (instead of on every request)
export async function generateStaticParams() {
  return []
}

export default async function CollectionProductsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <CmsPage slug={`/collections/${slug}`} className="relative" zoneClassName="pb-container" />
}
