import {createClient} from '@orion-js/graphql-client'
import url from './url'
import TwoFactorPromptProvider from './TwoFactorPromptProvider'

// use unique session key per project to avoid
// loging in and out every time you change it
// in localhost
const sessionKey = 'orionjs.session'

export default createClient({
  endpointURL: url,
  useSubscriptions: false,
  promptTwoFactorCode: TwoFactorPromptProvider.promptTwoFactor,
  saveSession(session) {
    localStorage.setItem(sessionKey, JSON.stringify(session, null, 2))
  },
  getSession(session) {
    try {
      return JSON.parse(localStorage.getItem(sessionKey))
    } catch (e) {
      return {}
    }
  }
})
