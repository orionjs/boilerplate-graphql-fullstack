import {resolver} from '@orion-js/app'
import {Subscription, getUserSubscriptions} from '@orion-js/stripe'

export default resolver({
  returns: [Subscription],
  async resolve(user, params, viewer) {
    return await getUserSubscriptions(user)
  }
})
