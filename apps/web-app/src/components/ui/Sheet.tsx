import { BaseComponentProps } from '@/models/component.model'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface SheetProps extends BaseComponentProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  component?: React.FC<unknown>
  border?: 'all' | 'right' | 'left' | 'top' | 'button' | 'x' | 'y'
  borderWidth?: 'medium' | 'big'
  rounded?: 'none' | 'md'
}

export type PartialSheetProps = Partial<SheetProps>

export const Sheet: React.FC<SheetProps> = forwardRef(
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
            (border === 'button' && borderWidth === 'big') && 'border-b-2',
            (border === 'x' && borderWidth === 'big') && 'border-x-2',
            (border === 'y' && borderWidth === 'big') && 'border-y-2',
            (border === 'all' && borderWidth === 'medium') && 'border',
            (border === 'right' && borderWidth === 'medium') && 'border-r',
            (border === 'left' && borderWidth === 'medium') && 'border-l',
            (border === 'top' && borderWidth === 'medium') && 'border-t',
            (border === 'button' && borderWidth === 'medium') && 'border-b',
            (border === 'x' && borderWidth === 'medium') && 'border-x',
            (border === 'y' && borderWidth === 'medium') && 'border-y',
            rounded === 'md' && 'rounded-md',
            rounded === 'none' && '!rounded-none',
            className
          )
        }
        {...{ href, onClick }}
      >
        {children}
      </SheetRootComponent>
    )
  }
)
Sheet.displayName = 'Sheet'