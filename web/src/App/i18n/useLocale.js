import {useContext} from 'react'
import LocaleContext from './LocaleContext'

export default function useLocale() {
  const {locale} = useContext(LocaleContext)
  return locale
}
