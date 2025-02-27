'use client'

import type { CarouselApi } from '@/components/ui/carousel'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface CarouselButtonProps {
  api: CarouselApi

  classNames?: {
    button?: string
    icon?: string
  }
}

export const CarouselPrev: React.FC<CarouselButtonProps> = ({ api, classNames }) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true)

  useEffect(() => {
    if (!api) return

    const updateButtonStates = () => {
      setIsPrevDisabled(!api.canScrollPrev())
    }

    // Initial update
    updateButtonStates()

    // Subscribe to carousel state changes
    api.on('scroll', updateButtonStates)

    // Cleanup subscription on unmount
    return () => {
      api.off('scroll', updateButtonStates)
    }
  }, [api])

  return (
    <Button
      className={cn('disabled:text-gray-500 shadow-none', classNames?.button)}
      disabled={isPrevDisabled}
      onClick={() => api?.scrollPrev()}
    >
      <ChevronLeft className={cn('size-6', classNames?.icon)} />
    </Button>
  )
}

export const CarouselNext: React.FC<CarouselButtonProps> = ({ api, classNames }) => {
  const [isNextDisabled, setIsNextDisabled] = useState(true)

  useEffect(() => {
    if (!api) return

    const updateButtonStates = () => {
      setIsNextDisabled(!api.canScrollNext())
    }

    // Initial update
    updateButtonStates()

    // Subscribe to carousel state changes
    api.on('scroll', updateButtonStates)

    // Cleanup subscription on unmount
    return () => {
      api.off('scroll', updateButtonStates)
    }
  }, [api])

  return (
    <Button
      className={cn('disabled:text-gray-500 shadow-none', classNames?.button)}
      disabled={isNextDisabled}
      onClick={() => api?.scrollNext()}
    >
      <ChevronRight className={cn('size-6', classNames?.icon)} />
    </Button>
  )
}
