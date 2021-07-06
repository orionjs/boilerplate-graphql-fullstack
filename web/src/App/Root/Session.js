import React, {useEffect} from 'react'
import apollo from './apollo'
import {getSession} from '@orion-js/graphql-client'
import SessionContext from 'App/helpers/auth/SessionContext'
import useForceUpdate from 'App/hooks/useForceUpdate'

export default function(props) {
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const onResetStore = () => forceUpdate()
    apollo.onResetStore(onResetStore)
    return () => {
      const index = apollo.resetStoreCallbacks.indexOf(onResetStore)
      if (index > -1) {
        apollo.resetStoreCallbacks.splice(index, 1)
      }
    }
    // eslint-disable-next-line
  }, [])

  const session = getSession() || {}
  return <SessionContext.Provider value={session}>{props.children}</SessionContext.Provider>
}
