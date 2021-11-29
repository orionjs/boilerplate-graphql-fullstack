import {resolver} from '@orion-js/resolvers'
import {createModel} from '@orion-js/models'

export default createModel({
  name: 'UserProfile',
  schema: {
    firstName: {
      type: String,
      min: 2,
      label: {
        en: 'First name',
        es: 'Nombre'
      }
    },
    lastName: {
      type: String,
      min: 2,
      label: {
        en: 'Last name',
        es: 'Apellido'
      }
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
