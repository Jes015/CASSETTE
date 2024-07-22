'use client'
import { Modal } from "@/components/ui/Modal/Modal"
import { RoundedButton, RoundedButtonType } from "@/components/ui/RoundedButton/RoundedButton"
import { IconEdit } from "@tabler/icons-react"
import clsx from "clsx"
import { useState } from "react"

export const RoundedEditProfileButton: RoundedButtonType = ({ onClick, icon, imageProps, ...props }) => {
    const [loading, setLoading] = useState(false)

    const handleOnClickToEditArt = () => {
        setLoading(true)
    }

    return (
        <Modal
            trigger={
                <RoundedButton
                    onClick={handleOnClickToEditArt}
                    icon={<IconEdit />}
                    imageProps={{
                        ...imageProps,
                        className: clsx(imageProps.className, '')
                    }}
                    loading={loading}
                    rounded={true}
                    {...props}
                />
            }
            headerProps={{
                title: 'Avatar selector',
                description: 'Upload a image'
            }}
        >
            <button type="button" onClick={handleOnClickToEditArt}>Upload</button>
        </Modal>
    )
}