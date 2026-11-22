import CmsPage from '@/components/shared/cms-page'

// Re-render from the CMS at most once a minute, so edits show up without a redeploy
export const revalidate = 60

export default function CollectionsPage() {
  return <CmsPage slug="/collections" zoneClassName="py-container" />
}
