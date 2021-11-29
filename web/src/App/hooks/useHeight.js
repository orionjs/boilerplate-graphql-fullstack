import {useState, useEffect} from 'react'

export default function useWidth() {
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handler = function() {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return height
}
