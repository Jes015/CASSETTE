import { BaseComponentProps } from '@/models/component.model'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface SheetProps extends BaseComponentProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  component?: React.FC<unknown>
  border?: 'all' | 'right' | 'left' | 'top' | 'button' | 'x' | 'y'
  rounded?: 'none' | 'md'
}

export type PartialSheetProps = Partial<SheetProps>

export const Sheet: React.FC<SheetProps> = forwardRef(
  ({ children, as, className, href, component, border = 'all', rounded = 'md', onClick }, ref) => {
    const SheetRootComponent = (component ?? as) ?? 'div'

    return (
      // @ts-expect-error expected error by polymorphic component
      <SheetRootComponent
        className={
          clsx(
            'bg-bg-secondary border-border-primary/40 border-line p-2 relative rounded-md overflow-hidden flex justify-center transition-all',
            border === 'all' && 'border-2',
            border === 'right' && 'border-r-2',
            border === 'left' && 'border-l-2',
            border === 'top' && 'border-t-2',
            border === 'button' && 'border-b-2',
            border === 'x' && 'border-x-2',
            border === 'y' && 'border-y-2',
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