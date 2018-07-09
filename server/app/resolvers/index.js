import {resolversSchemas} from '@orion-js/graphql'
import Auth from './Auth'
import Users from './Users'

export default {
  ...resolversSchemas,
  ...Auth,
  ...Users
}
