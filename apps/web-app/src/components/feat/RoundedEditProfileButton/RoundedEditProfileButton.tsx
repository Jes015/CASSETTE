'use client'
import { Modal } from "@/components/ui/Modal/Modal"
import { RoundedButton, RoundedButtonType } from "@/components/ui/RoundedButton/RoundedButton"
import { IconEdit } from "@tabler/icons-react"
import { useState } from "react"

export const RoundedEditProfileButton: RoundedButtonType = ({ onClick, icon, ...props }) => {
    const [loading, setLoading] = useState(false)

    const handleOnClickToEditArt = () => {
        setLoading(prev => !prev)
    }

    return (
        <Modal
            trigger={
                <RoundedButton
                    onClick={handleOnClickToEditArt}
                    icon={<IconEdit />}
                    loading={loading}
                    rounded={true}
                    {...props}
                />
            }
            headerProps={{
                title: 'Avatar selector',
                description: 'Upload a image'
            }}
            className="!border-b-2"
        >
            <div
                className="flex flex-col gap-4 p-1"
            >
                <button type="button" onClick={handleOnClickToEditArt}>
                    Upload from your files
                </button>
                <button type="button" onClick={handleOnClickToEditArt}>
                    From url
                </button>
            </div>
        </Modal>
    )
}