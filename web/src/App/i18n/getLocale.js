import numeral from 'numeral'
import moment from 'moment'

const getBrowserLang = function() {
  const full = navigator.language || navigator.userLanguage
  const parts = full.split('-')
  return parts[0]
}

const getSavedLang = function() {
  return window.localStorage.locale
}

const getUserLang = function(user) {
  if (!user) return
  if (!user.profile) return
  if (!user.profile.language) return
  return user.profile.language
}

export default function(user) {
  const locale = getUserLang(user) || getSavedLang() || getBrowserLang()

  moment.locale(locale)
  numeral.locale(locale)

  return locale
}
