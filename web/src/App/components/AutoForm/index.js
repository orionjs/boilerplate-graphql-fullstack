import createAutoform from 'orionjs-react-autoform'
import fields from '../fields'

const Autoform = createAutoform({
  fields,
  onError: error => alert(error.message)
})

export default Autoform
