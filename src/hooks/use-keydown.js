import React from 'react'

function useKeyDown(key, callback) {
  if (!key || !callback) {
    return
  }

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === key) {
        callback(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}
export default useKeyDown
