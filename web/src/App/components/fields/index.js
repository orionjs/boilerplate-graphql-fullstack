import ArrayComponent from 'orionsoft-parts/lib/components/fields/ArrayComponent'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import NumberField from 'orionsoft-parts/lib/components/fields/numeral/Number'
import DateText from 'orionsoft-parts/lib/components/fields/DateText'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import Checkbox from 'orionsoft-parts/lib/components/fields/Checkbox'
import ObjectField from './ObjectField'
import SixDigitInput from './SixDigitInput'

export default {
  string: Text,
  number: NumberField,
  array: ArrayComponent,
  plainObject: ObjectField,
  boolean: Checkbox,
  date: DateText,
  sixDigit: SixDigitInput,
  select: Select
}
