import type { TextField } from 'payload'

const ColorField = (overrides?: Omit<TextField, 'type'>): TextField => {
  const { name = 'color', label = 'Color', admin, ...rest } = overrides ?? {}

  return {
    type: 'text',
    name,
    label,
    admin: {
      ...admin,
      components: {
        Field: '/components/payload/color-picker.tsx',
      },
    },
    ...rest,
  } as TextField
}

export default ColorField
