'use client'
import { Button } from "@/components/ui/Button/Button"
import { BaseComponentProps } from "@/models/ui/component.model"
import { IconHeart, IconHeartFilled, IconShoppingCart } from "@tabler/icons-react"
import clsx from "clsx"
import { FC } from "react"

interface SongActionsProps extends BaseComponentProps {
    size: 'small' | 'big' | 'pretty-small'
    isProfileOwner: boolean
}

export const SongActions: FC<SongActionsProps> = ({ className, size = 'small', isProfileOwner, ...props }) => {
    const isLiked = true

    const handleOnClickAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    let iconsWidth = 18

    if (size === 'big') {
        iconsWidth = 22
    } else if (size === 'pretty-small') {
        iconsWidth = 14
    }

    return (
        <div
            className={
                clsx(
                    "flex items-center gap-1",
                    className
                )
            }
            {...props}
        >
            <Button
                onClick={handleOnClickAction}
            >
                {isLiked ? <IconHeartFilled className="text-[#ff5c5c]" width={iconsWidth} height={iconsWidth} /> : <IconHeart width={iconsWidth} height={iconsWidth} />}
            </Button>
            {
                !isProfileOwner && (
                    <Button
                        onClick={handleOnClickAction}
                    >
                        <IconShoppingCart width={iconsWidth} height={iconsWidth} />
                    </Button>
                )
            }
        </div>
    )
}