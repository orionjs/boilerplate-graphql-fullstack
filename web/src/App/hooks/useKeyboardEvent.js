import useRef from './useRef'
import {useEffect} from 'react'

export default function useKeyboardEvent(combination, callback) {
  const keysToMatch = combination.toLowerCase().split('+')
  const keys = useRef({}).current

  const onKeyDown = event => {
    const key = event.key.toLowerCase()
    keys[key] = true

    for (const keyToMatch of keysToMatch) {
      if (!keys[keyToMatch]) return
    }

    callback()
  }

  const onKeyUp = event => {
    const key = event.key.toLowerCase()
    delete keys[key]
  }

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('keydown', onKeyDown)
    }
  })
}
