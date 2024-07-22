import { ColumnArt, ColumnArtPropsPartial } from "@/components/feat/ColumnArt/ColumnArt"
import { IconX } from "@tabler/icons-react"
import clsx from "clsx"
import { cloneElement, FC, ReactElement, useState } from "react"

interface ModalProps extends ColumnArtPropsPartial {
    trigger: React.ReactNode
}

export const Modal: FC<ModalProps> = ({ trigger, className, headerProps, ...props }) => {
    const [displayModal, setDisplayModal] = useState(false)

    const toggleDisplayModal = (newState: boolean) => {
        setDisplayModal(newState)
    }

    return (
        <>
            {cloneElement(trigger as ReactElement, { onClick: () => { toggleDisplayModal(true) } })}
            {
                displayModal && (
                    <div
                        className="fixed m-auto left-0 right-0 w-fit z-40 top-40 bottom-0 overflow-hidden"
                    >
                        <ColumnArt
                            className={clsx("overflow-hidden", className)}
                            headerProps={{
                                ...headerProps,
                                title: headerProps?.title ?? 'Modal no value',
                                description: headerProps?.description ?? 'Modal description no value',
                                className: clsx("z-50 !p-1 !pl-2", headerProps?.className),
                                rightNode: (
                                    <div className="flex items-stretch">
                                        <button className="hover:bg-bg-tertiary rounded-md p-1" onClick={() => { toggleDisplayModal(false) }}>
                                            <IconX width={18} height={18} />
                                        </button>
                                    </div>
                                )
                            }}
                            {...props}
                        />
                    </div>
                )
            }
        </>
    )
}