import { Button } from "@/components/ui/Button/Button"
import { BaseComponentProps } from "@/models/component.model"
import { IconHeart, IconHeartFilled, IconShoppingCart } from "@tabler/icons-react"
import clsx from "clsx"
import { FC } from "react"

interface SongActionsProps extends BaseComponentProps {
    size: 'small' | 'big'
}

export const SongActions: FC<SongActionsProps> = ({ className, size = 'small', ...props }) => {
    const isTheUserOwner = false
    const isLiked = true

    const handleOnClickAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }

    let iconsWidth = 18

    if (size === 'big') {
        iconsWidth = 22
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
                !isTheUserOwner && (
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