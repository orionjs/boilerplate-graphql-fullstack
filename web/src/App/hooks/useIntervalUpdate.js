import {useEffect} from 'react'
import useForceUpdate from './useForceUpdate'

export default function(time) {
  const forceUpdate = useForceUpdate()
  useEffect(() => {
    const interval = setInterval(forceUpdate, time)
    return () => {
      clearInterval(interval)
    }
  }, [])
}
