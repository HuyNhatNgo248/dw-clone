import { MainMenuItem } from '@/payload-types'

import { create } from 'zustand'

interface OpenSubMenu {
  selectedMainMenu: MainMenuItem | null
  setSelectedMainMenu: (menu: MainMenuItem | null) => void
}

export const useOpenSubMenu = create<OpenSubMenu>()((set) => ({
  selectedMainMenu: null,
  setSelectedMainMenu: (menu) => set(() => ({ selectedMainMenu: menu })),
}))
