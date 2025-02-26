import type { CollectionSlug, DataFromCollectionSlug } from 'payload'
import type { Page } from '@/payload-types'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractComponent(
  name: keyof Page,
  data: DataFromCollectionSlug<CollectionSlug> | null,
) {
  if (data === null) return null

  return (data as Page)[name] || null
}
