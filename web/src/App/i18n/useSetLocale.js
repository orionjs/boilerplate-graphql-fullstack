import {useContext} from 'react'
import LocaleContext from './LocaleContext'

export default function useLocale() {
  const {setLocale} = useContext(LocaleContext)
  return setLocale
}
