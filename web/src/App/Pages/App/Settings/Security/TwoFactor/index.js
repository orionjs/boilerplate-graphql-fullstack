import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Disable from './Disable'
import Enable from './Enable'
import Section from 'App/components/Section'
import Translate from 'App/i18n'

@withGraphQL(gql`
  query doIHaveTwoFactor {
    me {
      _id
      hasTwoFactor
    }
  }
`)
export default class TwoFactor extends React.Component {
  static propTypes = {
    me: PropTypes.object
  }

  renderDisable() {
    if (!this.props.me.hasTwoFactor) return
    return <Disable />
  }

  renderEnable() {
    if (this.props.me.hasTwoFactor) return
    return <Enable />
  }

  render() {
    return (
      <div className={styles.container}>
        <Section
          top
          title={<Translate tr="settings.twoFactorAuthentication" />}
          description={<Translate tr="settings.twoFactorDescription" />}>
          {this.renderDisable()}
          {this.renderEnable()}
        </Section>
      </div>
    )
  }
}
