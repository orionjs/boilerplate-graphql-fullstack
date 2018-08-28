import ArrayComponent from 'orionsoft-parts/lib/components/fields/ArrayComponent'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import NumberField from 'orionsoft-parts/lib/components/fields/numeral/Number'
import DateText from 'orionsoft-parts/lib/components/fields/DateText'
import Toggle from 'orionsoft-parts/lib/components/fields/Toggle'
import ObjectField from './ObjectField'
import SixDigitInput from './SixDigitInput'

export default {
  string: Text,
  number: NumberField,
  array: ArrayComponent,
  plainObject: ObjectField,
  boolean: Toggle,
  date: DateText,
  sixDigit: SixDigitInput
}
