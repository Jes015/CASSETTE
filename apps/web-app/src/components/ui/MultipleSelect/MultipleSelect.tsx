import { IconPlus, IconX } from "@tabler/icons-react"
import clsx from "clsx"
import { FC } from "react"
import { Badge } from "../Badge"
import { Modal } from "../Modal/Modal"
import { Text } from "../Text/Text"
import { useMultipleSelect } from "./hooks/useMultipleSelect"

interface MultipleSelectProps {
    options: string[]
    defaultSelectedOptions: string[]
    unlock: boolean
    onChange: (optionsSelected: string[]) => void
}

export const MultipleSelect: FC<MultipleSelectProps> = ({ defaultSelectedOptions, unlock, options, onChange }) => {
    const { selectedOptions, addSelectedOption, removeSelectedOption } = useMultipleSelect(defaultSelectedOptions, onChange)

    const handleOnClickToDeleteOption = (option: string) => () => {
        removeSelectedOption(option)
    }

    const handleOnClickToAddOption = (option: string) => () => {
        addSelectedOption(option)
    }

    const freeOptions = options.filter(option => !selectedOptions.includes(option))

    return (
        <div className="flex mt-1 gap-1 items-start flex-shrink-0 justify-end">
            {
                selectedOptions.map((value) => (
                    <Badge
                        key={value}
                        size="big"
                        className={
                            clsx(
                                unlock && 'flex items-center gap-[0.2rem] pl-1 justify-between flex-shrink-0'
                            )
                        }
                    >
                        {
                            unlock && (
                                <button
                                    type="button"
                                    className="flex items-center pt-[0.1rem]"
                                    onClick={handleOnClickToDeleteOption(value)}
                                >
                                    <IconX className="text-zinc-400" width={14} height={14} />
                                </button>
                            )
                        }
                        <span>
                            {value}
                        </span>
                    </Badge>
                ))
            }
            {
                unlock && (
                    <Modal
                        trigger={
                            <button
                                type="button"
                                className="!flex !self-stretch justify-center items-center cursor-pointer border border-border-primary rounded-lg h-[24px] px-1"
                            >
                                <IconPlus width={14} height={14} />
                            </button>
                        }
                        headerProps={{
                            title: 'Role selector',
                            description: 'Select your role'
                        }}
                    >
                        {
                            freeOptions.map(option => (
                                <button
                                    key={option}
                                    onClick={handleOnClickToAddOption(option)}
                                    className="font-semibold p-2 border-b-2 border-b-border-secondary hover:bg-bg-primary transition-colors"
                                    type="button"
                                >
                                    {option}
                                </button>
                            ))
                        }
                        {
                            freeOptions.length === 0 && (
                                <div
                                    className="p-2 flex justify-center border-b border-b-border-secondary"
                                >
                                    <Text as="tertiary">No options found</Text>
                                </div>
                            )
                        }
                    </Modal>
                )
            }
        </div>
    )
}