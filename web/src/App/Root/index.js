import React from 'react'
import apolloClient from './apollo'
import {ApolloProvider} from 'react-apollo'
// import HooksProvider from 'apollo-hooks/lib/ApolloProvider'
import OrionsoftProvider from 'orionsoft-parts/lib/components/Provider'
import TwoFactorPromptProvider from './TwoFactorPromptProvider'
import ErrorHandler from 'App/components/ErrorHandler'
import LocaleProvider from 'App/i18n/LocaleProvider'

export default function Root() {
  return (
    <LocaleProvider>
      <ApolloProvider client={apolloClient}>
        {/* <HooksProvider client={apolloClient}> */}
        <ErrorHandler>
          <OrionsoftProvider meProvider={false}>
            <TwoFactorPromptProvider>{this.props.children}</TwoFactorPromptProvider>
          </OrionsoftProvider>
        </ErrorHandler>
        {/* </HooksProvider> */}
      </ApolloProvider>
    </LocaleProvider>
  )
}
