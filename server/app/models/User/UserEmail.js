import {createModel} from '@orion-js/models'

export default createModel({
  name: 'UserEmail',
  schema: {
    address: {
      type: 'email'
    },
    verified: {
      type: Boolean
    }
  }
})
