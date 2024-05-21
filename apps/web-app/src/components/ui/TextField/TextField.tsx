import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { TextFieldLabel } from "./components/TextFieldLabel"

interface TextFieldProps extends BaseComponentProps {
    as: 'primary' | 'secondary' | 'tertiary'
}

export const TextField = ({ as, className, ...props }: TextFieldProps) => {
    return (
        <label
            className={
                clsx(
                    'flex flex-col gap-1',
                    as === 'secondary' && 'text-sm text-text-secondary font-medium',
                    as === 'tertiary' && 'text-xs',
                    className
                )
            }
            {...props}
        />
    )
}

TextField.Label = TextFieldLabel