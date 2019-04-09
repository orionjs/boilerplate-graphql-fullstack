import {useState, useEffect} from 'react'

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handler = function() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return width
}
