import React from 'react'
import translate from './translate'
import omit from 'lodash/omit'
import useLocale from './useLocale'
import './external'

export default function Translate(props) {
  const locale = useLocale()
  const params = omit(props, 'tr')
  const translation = translate(props.tr, params, locale)
  if (props.html) return <span dangerouslySetInnerHTML={{__html: translation}} />
  return translation
}
