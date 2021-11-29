import {useEffect} from 'react'

export default function(callback, time) {
  useEffect(() => {
    const interval = setInterval(callback, time)
    return () => {
      clearInterval(interval)
    }
  })
}
