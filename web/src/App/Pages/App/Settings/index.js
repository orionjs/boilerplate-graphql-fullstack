import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Profile from './Profile'
import Tabs from 'orionsoft-parts/lib/components/Tabs'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Breadcrumbs from 'App/components/Breadcrumbs'
import Container from 'orionsoft-parts/lib/components/Container'
import forceLogin from 'App/helpers/auth/forceLogin'
import Security from './Security'

@forceLogin
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <Breadcrumbs>Settings</Breadcrumbs>
          <br />
          <Tabs
            items={[
              {title: 'Profile', path: '/settings'},
              {title: 'Seguridad', path: '/settings/security'}
            ]}
          />
        </div>
        <Container>
          <Switch>
            <Route exact path="/settings" component={Profile} />
            <Route path="/settings/security" component={Security} />
          </Switch>
        </Container>
      </div>
    )
  }
}
