import type { JSONField } from 'payload'

const SizeField = (overrides?: Omit<JSONField, 'type'>): JSONField => {
  const { name = 'sizePicker', label = 'Size Picker', admin, ...rest } = overrides ?? {}

  return {
    type: 'json',
    name,
    label,
    admin: {
      ...admin,
      components: {
        Field: '/components/payload/size-picker.tsx', // Path to your custom size picker component
      },
    },
    ...rest,
  } as JSONField
}

export default SizeField
