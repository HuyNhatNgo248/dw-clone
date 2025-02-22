import { fetchPage } from '@/lib/api'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const data = await fetchPage('/home-page')

  console.log(data)

  if (data === null) return notFound()

  return <div className="text-red-300">lol</div>
}
