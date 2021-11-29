import React from 'react'
import authRouteRegex from './Auth/routeRegex'
import DynamicComponent from 'App/components/DynamicComponent'
import App from './App'
import useRouter from 'App/hooks/useRouter'
import SuspenseLoading from 'App/components/SuspenseLoading'

const Auth = DynamicComponent(() => import('./Auth'))

const Page = function() {
  const {location} = useRouter()
  if (authRouteRegex.test(location.pathname)) {
    return <Auth />
  }
  return <App />
}

export default function Pages() {
  return (
    <SuspenseLoading>
      <Page />
    </SuspenseLoading>
  )
}
