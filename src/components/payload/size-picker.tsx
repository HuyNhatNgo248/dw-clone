'use client'

import { useState } from 'react'
import { useField, FieldLabel } from '@payloadcms/ui'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

// Define types
type SizeType = 'caseDiameter' | 'innerCircumference'
type Sizes = {
  [key in SizeType]: number[]
}

interface SizePickerProps {
  path: string
  field: {
    label: string
    required?: boolean
  }
}

const caseDiameterSizes: number[] = [24, 28, 32, 36, 40, 44]
const innerCircumferenceSizes: number[] = [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70]

const SizePicker: React.FC<SizePickerProps> = ({ path, field: { label, required = false } }) => {
  const { value, setValue } = useField<Sizes>({ path })

  const [sizes, setSizes] = useState<Sizes>(value || { caseDiameter: [], innerCircumference: [] })
  const [activeTab, setActiveTab] = useState<string>('caseDiameter')

  const handleSizeToggle = (type: SizeType, size: number) => {
    const updatedSizes = {
      ...sizes,
      [type]: sizes[type].includes(size)
        ? sizes[type].filter((s) => s !== size)
        : [...sizes[type], size],
    }
    setSizes(updatedSizes)
    setValue(updatedSizes)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'caseDiameter') {
      setSizes({ caseDiameter: sizes.caseDiameter, innerCircumference: [] })
    } else {
      setSizes({ caseDiameter: [], innerCircumference: sizes.innerCircumference })
    }
  }

  const renderSizeOptions = (type: SizeType, sizeOptions: number[]) => (
    <div className="grid grid-cols-2 gap-4 w-1/2">
      {sizeOptions.map((size) => (
        <div key={size} className="flex items-center space-x-2">
          <Input
            className="w-min h-min"
            type="checkbox"
            id={`${type}-${size}`}
            checked={sizes[type].includes(size)}
            onChange={() => handleSizeToggle(type, size)}
          />
          <Label htmlFor={`${type}-${size}`}>{size} mm</Label>
        </div>
      ))}
    </div>
  )

  return (
    <Tabs defaultValue="caseDiameter" className="w-full mb-5" onValueChange={handleTabChange}>
      <FieldLabel htmlFor={path} label={label} required={required} />
      <TabsList className="h-10 bg-[var(--theme-input-bg)]">
        <TabsTrigger
          value="caseDiameter"
          className={cn('border-none bg-transparent text-base cursor-pointer', {
            'bg-black': activeTab === 'caseDiameter',
          })}
        >
          Case Diameter
        </TabsTrigger>
        <TabsTrigger
          value="innerCircumference"
          className={cn('border-none bg-transparent text-base cursor-pointer', {
            'bg-black': activeTab === 'innerCircumference',
          })}
        >
          Inner Circumference
        </TabsTrigger>
      </TabsList>

      <TabsContent value="caseDiameter">
        <p className="mb-4 font-semibold">Select Case Diameter Sizes:</p>
        {renderSizeOptions('caseDiameter', caseDiameterSizes)}
      </TabsContent>

      <TabsContent value="innerCircumference">
        <p className="mb-4 font-semibold">Select Inner Circumference Sizes:</p>
        {renderSizeOptions('innerCircumference', innerCircumferenceSizes)}
      </TabsContent>
    </Tabs>
  )
}

export default SizePicker
