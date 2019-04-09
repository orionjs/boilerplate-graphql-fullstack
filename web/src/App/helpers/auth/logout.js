import gql from 'graphql-tag'
import {setSession} from '@orion-js/graphql-client'

export default async function() {
  global.apolloClient.mutate({
    mutation: gql`
      mutation logout {
        logout
      }
    `
  })
  await setSession(null)
}
