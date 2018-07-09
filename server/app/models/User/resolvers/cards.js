import {resolver} from '@orion-js/app'
import {Card, getUserCards} from '@orion-js/stripe'

export default resolver({
  returns: [Card],
  async resolve(user, params, viewer) {
    return await getUserCards(user)
  }
})
