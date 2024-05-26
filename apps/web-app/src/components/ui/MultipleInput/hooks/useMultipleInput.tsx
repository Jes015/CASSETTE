import { useState } from 'react'

export const useMultipleInput = () => {
  const [values, setValues] = useState<string[]>([])
  const [showInput, setShowInput] = useState(false)

  const toggleShowInput = (value?: boolean) => {
    setShowInput((prev) => value ?? !prev)
  }

  const addValue = (value: string) => {
    setValues(prev => {
      const valueFound = prev.find(arrayValue => arrayValue === value)

      if (valueFound != null) return prev

      return [...prev, value]
    }
    )
  }

  const removeValue = (value: string) => {
    setValues(prev => {
      const valueIndex = prev.findIndex(arrayValue => arrayValue === value)
      const newValueArray = prev.toSpliced(valueIndex, 1)

      return newValueArray
    })
  }

  return { showInput, toggleShowInput, addValue, removeValue, values }
}