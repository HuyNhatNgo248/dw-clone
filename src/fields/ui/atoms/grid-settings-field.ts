import type { Field } from 'payload'

interface CustomField extends Omit<Field, 'type'> {
  name: string
  label: string
}

const GridSettingsField = (overrides?: CustomField): Field => {
  const { name = 'gridSettings', label = 'Grid Settings', admin, ...rest } = overrides ?? {}

  return {
    type: 'json',
    name,
    label,
    admin: {
      ...admin,
      components: {
        Field: '/components/payload/grid-settings.tsx',
      },
    },
    ...rest,
  } as Field
}

export default GridSettingsField
