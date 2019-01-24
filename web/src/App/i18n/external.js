import numeral from 'numeral'
import moment from 'moment'
import getLocale from './getLocale'

import 'numeral/locales/es'
import 'moment/locale/es'
import 'numeral/locales/pt-br'
import 'moment/locale/pt'

const locale = getLocale()

moment.locale(locale)
numeral.locale(locale)

global.numeral = numeral
global.moment = moment
