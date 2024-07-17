import { BaseComponentType } from "@/models/ui/component.model"
import clsx from "clsx"
import styles from './circular-loader.module.css'

export const CircularLoader: BaseComponentType = ({ className, ...props }) => {
    return (
        <span
            className={
                clsx(styles.loader, className)
            }
            {...props}
        />
    )
}