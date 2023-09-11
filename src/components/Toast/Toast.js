import React from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'
import { ToastContext } from '../ToastProvider'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, variant, children }) {
  const ToastIcon = ICONS_BY_VARIANT[variant]
  const { dismissToast } = React.useContext(ToastContext)

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button onClick={() => dismissToast(id)} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
