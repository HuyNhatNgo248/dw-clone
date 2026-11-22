'use client'

import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = () => (
  <button
    className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full p-4 rounded-t-full bg-white rounded-b-none cursor-pointer"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Scroll to top"
  >
    <ArrowUp className="stroke-1 md:size-8 size-6" />
  </button>
)

export default ScrollToTopButton
