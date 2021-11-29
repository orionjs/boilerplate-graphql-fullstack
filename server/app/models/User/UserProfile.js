import {resolver} from '@orion-js/resolvers'
import {createModel} from '@orion-js/models'

export default createModel({
  name: 'UserProfile',
  schema: {
    firstName: {
      type: String,
      min: 2,
      label: 'First name'
    },
    lastName: {
      type: String,
      min: 2,
      label: 'Last name'
    }
  },
  resolvers: {
    name: resolver({
      name: 'name',
      returns: String,
      resolve: async function (profile) {
        return profile.firstName
      }
    })
  }
})
