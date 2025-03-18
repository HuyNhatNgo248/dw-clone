'use client'

import { useField, FieldLabel } from '@payloadcms/ui'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface GridSettingsProps {
  path: string
  field: {
    label: string
    required?: boolean
  }
}

export interface GridSettingsPayload {
  enabled: boolean
  basis: number
}

const gridDefaultSettings = {
  enabled: false,
  basis: 1,
}

const GridSettings: React.FC<GridSettingsProps> = ({
  field: { label, required = false },
  path,
}: {
  field: { label: string; required?: boolean }
  path: string
}) => {
  const { value, setValue } = useField<GridSettingsPayload>({ path })
  const [carouselSettings, setCarouselSettings] = useState<GridSettingsPayload>(gridDefaultSettings)

  const handleUpdateCarouselSettings = (payload: Partial<GridSettingsPayload>) => {
    setCarouselSettings((prev) => ({ ...prev, ...payload }))
    setValue({ ...carouselSettings, ...payload })
  }

  return (
    <div className="mb-5">
      <FieldLabel htmlFor={path} required={required} label={label} />
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <Input
            className="w-min h-min"
            type="checkbox"
            id={'carousel-enabled'}
            checked={carouselSettings.enabled || value?.enabled || gridDefaultSettings.enabled}
            onChange={() => handleUpdateCarouselSettings({ enabled: !carouselSettings.enabled })}
          />
          <Label htmlFor={'carousel-enabled'}>Display carousel</Label>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor={'grid-basis'}>Grid basis</Label>
          <Input
            className="w-min h-min"
            type="number"
            id={'grid-basis'}
            min={1}
            max={4}
            onChange={(e) => handleUpdateCarouselSettings({ basis: e.target.valueAsNumber })}
            value={carouselSettings.basis || value?.basis || gridDefaultSettings.basis}
          />
        </div>
      </div>
    </div>
  )
}

export default GridSettings
