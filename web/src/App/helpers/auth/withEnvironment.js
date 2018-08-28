import React from 'react'
import withUserId from './withUserId'
import withEnvironmentId from 'App/helpers/environment/withEnvironmentId'
import PropTypes from 'prop-types'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'

export default function(ComposedComponent) {
  @withUserId
  @withEnvironmentId
  @withGraphQL(
    gql`
      query getEnvironment($userId: ID, $environmentId: ID) {
        environmentUserAuthorization(userId: $userId, environmentId: $environmentId)
      }
    `
  )
  class withEnvironment extends React.Component {
    static propTypes = {
      userId: PropTypes.string,
      environmentId: PropTypes.string,
      environmentUserAuthorization: PropTypes.bool
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return withEnvironment
}
