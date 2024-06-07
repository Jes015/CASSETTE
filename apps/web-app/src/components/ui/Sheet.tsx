'use client'
import { BaseComponentProps } from '@/models/ui/component.model'
import clsx from 'clsx'
import { FC, forwardRef } from 'react'

interface SheetProps extends BaseComponentProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  component?: React.FC<unknown>
  border?: 'all' | 'right' | 'left' | 'top' | 'bottom' | 'x' | 'y' | 'none'
  borderWidth?: 'medium' | 'big'
  rounded?: 'none' | 'md'
}

export type PartialSheetProps = Partial<SheetProps>

export type PartialSheetType = FC<PartialSheetProps>

export const Sheet = forwardRef<HTMLElement, PartialSheetProps>(
  ({ children, as, className, href, component, border = 'all', borderWidth = 'big', rounded = 'md', onClick }, ref) => {
    const SheetRootComponent = (component ?? as) ?? 'div'

    return (
      // @ts-expect-error expected error by polymorphic component
      <SheetRootComponent
        className={
          clsx(
            'bg-bg-secondary border-border-primary/40 p-2 relative rounded-md overflow-hidden flex justify-center transition-all',
            (border === 'all' && borderWidth === 'big') && 'border-2',
            (border === 'right' && borderWidth === 'big') && 'border-r-2',
            (border === 'left' && borderWidth === 'big') && 'border-l-2',
            (border === 'top' && borderWidth === 'big') && 'border-t-2',
            (border === 'bottom' && borderWidth === 'big') && 'border-b-2',
            (border === 'x' && borderWidth === 'big') && 'border-x-2',
            (border === 'y' && borderWidth === 'big') && 'border-y-2',
            (border === 'all' && borderWidth === 'medium') && 'border',
            (border === 'right' && borderWidth === 'medium') && 'border-r',
            (border === 'left' && borderWidth === 'medium') && 'border-l',
            (border === 'top' && borderWidth === 'medium') && 'border-t',
            (border === 'bottom' && borderWidth === 'medium') && 'border-b',
            (border === 'x' && borderWidth === 'medium') && 'border-x',
            (border === 'y' && borderWidth === 'medium') && 'border-y',
            rounded === 'md' && 'rounded-md',
            rounded === 'none' && '!rounded-none',
            className
          )
        }
        {...{ href, onClick, ref }}
      >
        {children}
      </SheetRootComponent>
    )
  }
)
Sheet.displayName = 'Sheet'