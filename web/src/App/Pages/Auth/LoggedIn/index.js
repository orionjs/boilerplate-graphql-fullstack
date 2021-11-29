import React from 'react'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import logout from 'App/helpers/auth/logout'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import Translate from 'App/i18n'

@withRouter
export default class Logout extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  async logout() {
    await logout()
  }

  render() {
    return (
      <div className={styles.container}>
        <p>
          <Translate tr="auth.youAreLoggedIn" />
        </p>
        <Button onClick={() => this.props.history.push('/')}>
          <Translate tr="auth.goHome" />
        </Button>
        <Button onClick={this.logout} danger>
          <Translate tr="auth.signOut" />
        </Button>
      </div>
    )
  }
}
