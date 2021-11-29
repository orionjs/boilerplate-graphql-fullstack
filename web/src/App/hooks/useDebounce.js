import useState from './useState'
import useEffect from './useEffect'
import isEqual from 'lodash/isEqual'

export default function useDebounce(value, wait) {
  let [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      let tid = setTimeout(() => setDebouncedValue(value), wait)

      return () => clearTimeout(tid)
    },
    [value]
  )

  const loading = !isEqual(value, debouncedValue)
  return [debouncedValue, loading]
}
