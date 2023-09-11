import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, handleDismiss }) {
  if (toasts.length <= 0) {
    return null
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id} handleDismiss={handleDismiss}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
