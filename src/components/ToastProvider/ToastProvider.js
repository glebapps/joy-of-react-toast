import React from 'react'
import useKeyDown from '../../hooks/use-keydown'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  useKeyDown('Escape', handleEscape)

  const createToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ]

    setToasts(nextToasts)
  }

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
