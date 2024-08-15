import { useState } from 'react'

export const useMultipleInput = (defaultValues: string[], onAddValue: (data: string[]) => void) => {
  const [values, setValues] = useState<string[]>(defaultValues)
  const [showInput, setShowInput] = useState(false)

  const toggleShowInput = (value?: boolean) => {
    setShowInput((prev) => value ?? !prev)
  }

  const addValue = (value: string) => {
    setValues(prev => {
      const valueFound = prev.find(arrayValue => arrayValue === value)

      if (valueFound != null) return prev

      const newValuesValue = [...prev, value]
      onAddValue(newValuesValue)

      return newValuesValue
    }
    )
  }

  const removeValue = (value: string) => {
    setValues(prev => {
      const valueIndex = prev.findIndex(arrayValue => arrayValue === value)
      const newValueArray = prev.toSpliced(valueIndex, 1)

      onAddValue(newValueArray)

      return newValueArray
    })
  }

  return { showInput, toggleShowInput, addValue, removeValue, values }
}