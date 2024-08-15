import { useEffect, useState } from "react"

export const useMultipleSelect = (defaultSelectedOptions: string[], onChange: (options: string[]) => void, onUnmount?: () => void) => {
    const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions)

    useEffect(() => {
        return () => {
            onUnmount?.()
        }
    }, [])

    const addSelectedOption = (option: string) => {
        setSelectedOptions(prev => {
            let newSelectedOptionsArray = prev

            const isTheOptionAlreadyInTheList = prev.includes(option)

            if (!isTheOptionAlreadyInTheList) {
                newSelectedOptionsArray = [...prev, option]
            }

            onChange(newSelectedOptionsArray)

            return newSelectedOptionsArray
        }
        )
    }

    const removeSelectedOption = (optionToDelete: string) => {
        setSelectedOptions(prev => {
            let newSelectedOptionsArray = prev

            const doesTheOptionExits = prev.includes(optionToDelete)

            if (doesTheOptionExits) {
                newSelectedOptionsArray = prev.filter(option => option !== optionToDelete)
            }

            onChange(newSelectedOptionsArray)

            return newSelectedOptionsArray
        })
    }

    return { selectedOptions, addSelectedOption, removeSelectedOption }
}