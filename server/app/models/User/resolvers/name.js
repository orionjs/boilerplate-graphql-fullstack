import {resolver} from '@orion-js/app'

export default resolver({
  returns: String,
  async resolve(user, params, viewer) {
    if (!user.profile) return null
    if (!user.profile.firstName) return null
    return user.profile.firstName
  }
})
