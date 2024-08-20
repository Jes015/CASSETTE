'use client'
import { globalLoaderService } from '@/services/client/CustomEvents/global-loader.client-service-custom-events'
import clsx from 'clsx'
import DefaultLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,LinkProps {
  variant?: 'link' | 'none' | 'button'
}

export type PartialLinkProps = Partial<Props>

export type LinkPartialType = React.FC<PartialLinkProps>

export const Link: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, variant: styles, ...props }, ref) => {
    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const someInvalidKeyPressed = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey

      if (someInvalidKeyPressed) return

      const linkPathname = href
      const actualPathname = location.pathname

      if (linkPathname === actualPathname) return
      globalLoaderService.sendMessage({ detail: true })
    }

    return (
      <DefaultLink
        onClick={handleOnClick}
        className={
          clsx(
            styles === 'link' && 'text-blue-400 hover:text-blue-200 transition-colors font-bold hover:underline',
            styles === 'button' && "flex items-center gap-2 border-2 rounded-md p-2 flex-grow bg-bg-primary hover:bg-bg-tertiary/20 border-border-secondary justify-center transition-colors",
            'font-medium',
            className
          )
        }
        {...{ ...props, href, ref }}
      >
        {children}
      </DefaultLink>
    )
  }
)

Link.displayName = 'Link'