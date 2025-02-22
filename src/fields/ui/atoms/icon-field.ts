import { Field } from 'payload'

const IconField: Field = {
  name: 'iconField',
  label: 'Icon',
  type: 'text',
  admin: {
    components: {
      Field: '/src/components/payload/fontawesome.tsx',
    },
  },
  hasMany: false,
  localized: false,
}

export default IconField
