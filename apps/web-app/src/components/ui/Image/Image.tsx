'use client'
import { IconPhotoOff } from '@tabler/icons-react'
import clsx from 'clsx'
import DefaultImage, { type ImageProps as DefaultImageProps } from 'next/image'
import { useState } from 'react'
import styles from './image.module.css'

interface ImageProps extends DefaultImageProps {
    loading: 'lazy' | 'eager'
}

export type PartialImageProps = Partial<ImageProps>

export const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    const handleOnLoadStart = () => {
        setIsLoading(true)
    }

    const handleOnLoad = () => {
        setIsLoading(false)
    }

    const handleOnError = () => {
        setError(true)
        setIsLoading(false)
    }

    return (
        <div
            className={
                clsx(
                    'bg-[rgba(255,255,255,.008)] relative !overflow-hidden',
                    styles.image__container,
                    isLoading ? styles['image__container--loading'] : '',
                    props.className ?? '!h-full !w-full'
                )
            }
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                overflow: 'hidden'
            }}
        >
            {
                !error && (
                    <DefaultImage
                        src={src}
                        {...{ ...props, alt }}
                        className={
                            clsx(
                                'object-cover text-center [object-position:center] [transition:opacity_0.7s_ease]',
                                isLoading ? 'opacity-0' : '',
                                error && 'grayscale',
                                props.className,
                                styles.image
                            )
                        }
                        onLoadStart={handleOnLoadStart}
                        onError={handleOnError}
                        onLoad={handleOnLoad}
                        loading={props.loading}
                    />
                )
            }
            {
                error && (
                    <div
                        className="flex flex-col justify-center items-center h-full"
                        title='Something went wrong loading the image'
                    >
                        <span className="text-xs font-semibold uppercase text-zinc-200 opacity-80">{alt}</span>
                        <IconPhotoOff stroke={2} width={props.width} height={props.height} className='text-zinc-800 scale-75' />
                    </div>
                )
            }
        </div>
    )
}