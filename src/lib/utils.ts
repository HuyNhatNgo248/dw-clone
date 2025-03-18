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

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(price)
}

export const COLORS: { [hex: string]: string } = {
  '#dfc96c': 'Gold',
  '#e5af87': 'Rose Gold',
  '#c1c1c1': 'Silver',
  '#747474': 'Graphite',
  '#000001': 'Silver',
  '#000000': 'Black',
}
