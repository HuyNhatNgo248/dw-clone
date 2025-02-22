import { Block } from 'payload'

const InputBlock: Block = {
  slug: 'Input',
  interfaceName: 'InputBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'placeholder',
      type: 'text',
    },
    {
      name: 'helperText',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'email',
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Password',
          value: 'password',
        },
      ],
    },
  ],
}

export default InputBlock
