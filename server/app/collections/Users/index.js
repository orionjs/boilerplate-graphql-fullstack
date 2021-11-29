import {createCollection} from '@orion-js/mongodb'
import User from 'app/models/User'

export default createCollection({
  name: 'users',
  model: User,
  indexes: [{keys: {'emails.address': 1}, options: {unique: true}}]
})
