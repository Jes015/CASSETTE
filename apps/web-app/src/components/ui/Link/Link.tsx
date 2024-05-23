'use client'
import { BaseComponentProps } from '@/models/component.model'
import { globalLoaderService } from '@/services/client/global-loader.client-service'
import clsx from 'clsx'
import DefaultLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface Props extends Omit<BaseComponentProps, 'onClick' | 'onMouseEnter' | 'onTouchStart'>, LinkProps {
  styles?: 'link' | 'none'
}

export type PartialLinkProps = Partial<Props>

export type LinkPartialType = React.FC<PartialLinkProps>

export const Link: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, styles, ...props }, ref) => {
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