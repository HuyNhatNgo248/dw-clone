import { Block } from 'payload'

import IconField from './icon-field'

const ButtonBlock: Block = {
  slug: 'Button',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    IconField,
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Tertiary', value: 'tertiary' },
      ],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'select',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      defaultValue: 'medium',
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in new tab',
    },
  ],
}

export default ButtonBlock
