import { BaseComponentProps } from "@/models/ui/component.model"
import clsx from "clsx"
import { TextFieldError } from "./components/TextFieldError"
import { TextFieldLabel } from "./components/TextFieldLabel"

interface TextFieldProps extends BaseComponentProps {
    as: 'primary' | 'secondary' | 'tertiary'
}

export const TextField = ({ as, className, ...props }: TextFieldProps) => {
    return (
        <label
            className={
                clsx(
                    'flex flex-col',
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
TextField.Error = TextFieldError