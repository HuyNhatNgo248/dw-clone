'use client'

import { Validate } from 'payload'
import { useField, FieldLabel, TextInput, Button } from '@payloadcms/ui'
import { LuPlus, LuMinus } from 'react-icons/lu'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// Define preset colors
const COLORS = [
  '#dfc96c', // Gold
  '#e5af87', // Rose Gold
  '#c1c1c1', // Silver
  '#747474', // Graphite
  '#000000', // Black
]

export const validateHexColor = (value: string): boolean | string => {
  return value?.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)?.length === 1
}

const ColorPicker = ({
  field: { label, required = false },
  path,
}: {
  field: { label: string; required?: boolean }
  path: string
}) => {
  const { value, setValue } = useField<string>({ path, validate: validateHexColor as Validate })
  const [showInput, setShowInput] = useState(false)
  const [presetColors, setPresetColors] = useState<string[]>(COLORS)
  const [customColor, setCustomColor] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleAddCustomColor = () => {
    if (validateHexColor(customColor)) {
      setValue(customColor)

      if (presetColors.includes(customColor)) {
        setErrorMsg('Color already exists.')
        return
      }

      setPresetColors((prev) => [...prev, customColor])
      setShowInput(false)
      setCustomColor('')
    } else {
      setErrorMsg('Invalid color format. Please use a valid hex color code.')
    }
  }

  return (
    <div className="mb-5">
      <FieldLabel htmlFor={path} required={required} label={label} />

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          {presetColors?.map((color) => (
            <div
              key={color}
              onClick={() => setValue(color)}
              className={cn(
                'cursor-pointer rounded-full hover:border-2 border-white size-10 flex items-center justify-center',
                {
                  'border-2': value === color,
                },
              )}
            >
              <div
                className="size-8 rounded-full"
                style={{
                  backgroundColor: color,
                }}
              />
            </div>
          ))}

          <TextInput path={path} className="hidden" value={value} readOnly />

          <div
            className="border border-gray-300 rounded-full size-9 flex items-center justify-center"
            onClick={() => {
              setShowInput((prev) => !prev)
              setCustomColor('')
              setErrorMsg('')
            }}
          >
            {!showInput && <LuPlus className="cursor-pointer size-6 text-gray-300" />}
            {showInput && <LuMinus className="cursor-pointer size-6 text-gray-300" />}
          </div>
        </div>

        {showInput && (
          <div className="flex flex-col gap-4">
            <TextInput
              label="Custom Color"
              path={path}
              value={customColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCustomColor(e.target.value)
              }}
              showError={!!errorMsg}
              className="text-white"
            />
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <div className="flex gap-4">
              <Button
                className="bg-transparent text-white border border-gray-300 m-0"
                onClick={() => {
                  setShowInput(false)
                  setCustomColor('')
                  setErrorMsg('')
                }}
              >
                Cancel
              </Button>
              <Button className="m-0" onClick={handleAddCustomColor}>
                Add
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorPicker
