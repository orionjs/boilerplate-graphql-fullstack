import {useState, useLayoutEffect, useEffect} from 'react'
import useWidth from './useWidth'

function getSize(el) {
  if (!el) return
  return el.offsetWidth
}

export default function useComponentSize(ref) {
  const [width, setComponentSize] = useState(getSize(ref.current))
  useWidth()

  function handleResize() {
    if (ref && ref.current) {
      const newWidth = getSize(ref.current)
      if (newWidth !== width) {
        setComponentSize(newWidth)
      }
    }
  }

  useEffect(() => {
    handleResize()
  })

  useLayoutEffect(() => {
    handleResize()
  })

  return width
}
