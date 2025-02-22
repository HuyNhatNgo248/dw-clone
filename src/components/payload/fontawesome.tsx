'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core'
import { SelectInput, useField } from '@payloadcms/ui'
import { OptionObject } from 'payload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

export const fontAwesomeIconOptions = () => {
  const options: OptionObject[] = []
  ;[fas, fab, far].forEach((iconPack) => {
    Object.keys(iconPack).forEach((icon) => {
      options.push({
        label: icon,
        value: iconPack[icon].prefix + '/' + iconPack[icon].iconName,
      })
    })
  })

  return options
}

type FontAwesomeSelectComponentProps = {
  path: string
}

export const Select: React.FC<FontAwesomeSelectComponentProps> = ({ path }) => {
  const { value, setValue } = useField<string>({ path })

  let icon: IconProp = { prefix: 'fas', iconName: 'question' }
  if (value) {
    icon = value.split('/') as [IconPrefix, IconName]
  }

  return (
    <div>
      <SelectInput
        path={path}
        name={path}
        value={value}
        label={'Icon'}
        description={'You can find all icons on the page https://fontawesome.com/icons'}
        hasMany={false}
        options={fontAwesomeIconOptions()}
        onChange={(e) => {
          setValue((e as { value: unknown })?.value)
        }}
      />
      {value && icon && (
        <span>
          Icon Preview: <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </div>
  )
}
