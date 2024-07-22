'use client'
import { Image, PartialImageProps } from "@/components/ui/Image/Image"
import { BaseComponentProps } from "@/models/ui/component.model"
import clsx from "clsx"
import { cloneElement, FC, MouseEvent, ReactElement } from "react"
import { CircularLoader } from "../CircularLoader/CircularLoader"

interface RoundedButtonProps extends BaseComponentProps {
    size?: 'small' | 'big' | 'resize'
    rounded?: boolean
    imageProps: PartialImageProps
    onClick?: () => void
    loading?: boolean
    icon?: React.ReactNode
}

export type PartialRoundedButtonProps = Partial<RoundedButtonProps>

export type RoundedButtonType = FC<RoundedButtonProps>

export const RoundedButton: RoundedButtonType = ({ size = 'small', className, imageProps, loading = false, rounded = true, onClick, icon, ...props }) => {

    const handleOnClickToPlayArt = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()

        onClick?.()
    }

    return (
        <div
            className={
                clsx(
                    "relative overflow-hidden",
                    rounded && 'rounded-full',
                    size === 'big' && 'w-40 h-40',
                    size === 'small' && 'w-14 h-14',
                    size === 'resize' && 'aspect-square !h-40'
                )
            }
            {...props}
        >
            <Image
                loading="eager"
                width={size === 'big' ? 160 : size === 'resize' ? 400 : 90}
                height={size === 'big' ? 160 : size === 'resize' ? 400 : 90}
                src={imageProps.src ?? "/tainy.webp"}
                alt={imageProps.alt ?? 'Tainy image'}
                className={
                    clsx(
                        "aspect-square object-cover",
                        rounded ? '!rounded-full' : '!rounded-none',
                        size === 'big' && 'w-40 !h-40',
                        size === 'small' && 'w-14 !h-14',
                        size === 'resize' && '!w-full !h-40'
                    )
                }
                {...imageProps}
            />
            <div
                className={
                    clsx(
                        "flex justify-center items-center w-full h-full absolute top-0 left-0 z-0 bg-bg-primary/80 transition-all",
                        loading ? 'opacity-85' : 'opacity-40 hover:opacity-85'
                    )
                }
            >
                {
                    loading && (
                        <div className="scale-150">
                            <CircularLoader />
                        </div>
                    )
                }
                {
                    !loading && (
                        <button
                            onClick={handleOnClickToPlayArt}
                            className={
                                clsx(
                                    "z-40 flex items-center w-full h-full justify-center p-2",
                                    rounded && 'rounded-full'
                                )
                            }
                        >
                            {
                                cloneElement(icon as ReactElement, {
                                    width: size === 'small' ? 28 : 54,
                                    height: size === 'small' ? 28 : 54
                                })
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )
}