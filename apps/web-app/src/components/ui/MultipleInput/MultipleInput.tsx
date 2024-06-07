'use client'
import { BaseComponentProps } from '@/models/ui/component.model'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, type ChangeEvent, type DetailedHTMLProps, type InputHTMLAttributes, type LegacyRef } from 'react'
import { useMultipleInput } from './hooks/useMultipleInput'

export interface MultipleInputProps extends Omit<BaseComponentProps, 'onChange'> {
    inputProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    rounded?: 'lg' | 'md'
    onAddValue?: (data: string[]) => void
}

export const MultipleInput = forwardRef<HTMLDivElement, MultipleInputProps>(
    ({ className, rounded = 'md', onAddValue, inputProps: { className: inputClassName, placeholder: inputPlaceholder, ...inputProps }, ...props }, ref) => {
        const { showInput, toggleShowInput, addValue, removeValue, values } = useMultipleInput()
        const inputRef = useRef<HTMLInputElement>()
        const [parent] = useAutoAnimate()

        useEffect(() => {
            onAddValue?.(values)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [values])

        const handleOnClickToFocusInput = () => {
            inputRef.current?.focus()
        }

        const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.currentTarget.value.trim()

            if (inputValue === '') {
                toggleShowInput(false)
                return
            }

            toggleShowInput(true)
        }

        const handleOnClickToClearInput = () => {
            if (inputRef.current == null) return
            inputRef.current.value = ''
            toggleShowInput(false)
        }

        const handleOnClickToAddEntry = () => {
            if (inputRef.current == null || inputRef.current.value.trim() === '') return

            const inputValue = inputRef.current.value

            addValue(inputValue)

            inputRef.current.value = ''
            toggleShowInput(false)
        }

        const handleOnClickToRemoveEntry = (value: string) => () => {
            removeValue(value)
        }

        return (
            <div
                ref={ref}
                onClick={handleOnClickToFocusInput}
                className={
                    clsx(
                        'cursor-text overflow-x-clip [align-content:flex-start] items-center gap-1 flex flex-wrap w-full min-h-[37.6px] border [transition-duration:0.2s] relative py-1 outline-none  hover:drop-shadow-sm bg-bg-primary hover:bg-bg-tertiary/15 focus-within:bg-bg-tertiary/15 p-2 rounded-md border-border-primary/40 hover:border-border-primary focus-within:border-border-primary',
                        values.length > 0 ? 'px-1' : 'px-0',
                        className,
                        rounded === 'md' && 'rounded-md',
                        rounded === 'lg' && 'rounded-lg'
                    )
                }
                {...props}
            >
                <div ref={parent} className='inline-flex gap-1 flex-wrap items-center justify-start'>
                    {
                        values.map((value) => (
                            <div
                                key={value}
                                className='inline-flex items-center gap-2 text-xs p-1 bg-neutral-800 h-6 rounded-md select-none cursor-pointer border border-neutral-700 border-opacity-30'
                                onClick={handleOnClickToRemoveEntry(value)}
                            >
                                {value}
                                <Cross2Icon />
                            </div>
                        )
                        )
                    }
                </div>
                <div
                    className={
                        clsx(
                            'inline-flex items-stretch border-2 overflow-hidden',
                            showInput ? 'border-opacity-40 bg-bg-tertiary/20 rounded-md border-border-primary' : 'border-transparent '
                        )
                    }
                >
                    <input
                        ref={inputRef as LegacyRef<HTMLInputElement>}
                        placeholder={values.length > 0 ? '' : inputPlaceholder}
                        className={
                            clsx(
                                'border-none max-w-44 outline-none bg-transparent text-sm p-1',
                                inputClassName
                            )
                        }
                        onChange={handleOnChangeInput}
                        type="text"
                        {...inputProps}
                    />
                    {
                        showInput && (
                            <div className='flex justify-center'>
                                <button type='button' onClick={handleOnClickToClearInput} className='border-l border-neutral-600 border-opacity-40 py-1 px-1 hover:bg-red-500 hover:bg-opacity-100 transition-colors'>
                                    <Cross2Icon />
                                </button>
                                <button type='button' onClick={handleOnClickToAddEntry} className='border-l border-neutral-600 border-opacity-40 py-1 px-2 hover:bg-green-500 hover:bg-opacity-80 transition-colors'>
                                    <CheckIcon />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
)

MultipleInput.displayName = 'MultipleInput'