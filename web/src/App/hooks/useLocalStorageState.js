import useForceUpdate from './useForceUpdate'

const getSavedValue = function(key, defaultValue) {
  const savedValue = localStorage.getItem(key)
  if (savedValue === null) {
    return defaultValue
  } else {
    console.log(savedValue)
    return JSON.parse(savedValue)
  }
}

export default function(key, defaultValue) {
  const forceUpdate = useForceUpdate()
  const value = getSavedValue(key, defaultValue)

  const setValue = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue))
    forceUpdate()
  }

  return [value, setValue]
}
