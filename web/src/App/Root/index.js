import React from 'react'
import apolloClient from './apollo'
import {ApolloProvider} from 'react-apollo'
import HooksApolloProvider from 'apollo-hooks/lib/ApolloProvider'
import OrionsoftProvider from 'orionsoft-parts/lib/components/Provider'
import PropTypes from 'prop-types'
import TwoFactorPromptProvider from './TwoFactorPromptProvider'
import ApolloErrorHandler from 'App/components/ApolloErrorHandler'
import Session from './Session'
import './locale'
import './versionHelper'

export default class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <HooksApolloProvider client={apolloClient}>
          <ApolloErrorHandler>
            <Session>
              <OrionsoftProvider meProvider={false}>
                <TwoFactorPromptProvider>{this.props.children}</TwoFactorPromptProvider>
              </OrionsoftProvider>
            </Session>
          </ApolloErrorHandler>
        </HooksApolloProvider>
      </ApolloProvider>
    )
  }
}
