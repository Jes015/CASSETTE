import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, debounceTime: number = 800) => {
    const [valueDebounced, setValueDebounced] = useState<T>()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValueDebounced(value)
        }, debounceTime)

        return () => {
            clearTimeout(timeout)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return { valueDebounced }
}