import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Disable from './Disable'
import Enable from './Enable'
import Section from 'App/components/Section'

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
          title="Autenticación de dos factores"
          description="La autenticación de dos factores es una medida de protección adicional para tu cuenta que se diseñó para garantizar que únicamente tú puedas acceder, aunque alguien más conozca la contraseña">
          {this.renderDisable()}
          {this.renderEnable()}
        </Section>
      </div>
    )
  }
}
