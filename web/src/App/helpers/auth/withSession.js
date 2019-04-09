import React from 'react'
import useSession from 'App/hooks/useSession'

export default function(ComposedComponent) {
  return function WithSession(props) {
    const session = useSession()
    return <ComposedComponent {...props} session={session} />
  }
}
