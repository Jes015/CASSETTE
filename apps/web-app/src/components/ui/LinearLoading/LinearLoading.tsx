import { BaseComponentType } from '@/models/ui/component.model'
import clsx from 'clsx'
import styles from './linear-loading.module.css'

export const LinearLoading: BaseComponentType = ({ className, children, ...props }) => {
  return (
    <div className={clsx(styles.linearLoading, className)} {...props}>
      <div className={styles.linearLoading__container}>
        <div className={styles.linearLoading__line} />
      </div>
    </div>
  )
}

export default LinearLoading