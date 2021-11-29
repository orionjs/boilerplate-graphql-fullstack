import React from 'react'
import AutoForm from 'App/components/AutoForm'
import {Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Button from 'orionsoft-parts/lib/components/Button'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import withUserId from 'App/helpers/auth/withUserId'
import LoggedIn from '../LoggedIn'
import {Link} from 'react-router-dom'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'

@withUserId
export default class Login extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func,
    userId: PropTypes.string,
    loading: PropTypes.bool
  }

  @autobind
  async onSuccess(session) {
    await setSession(session)
    this.props.onLogin()
  }

  render() {
    if (!this.props.loading && this.props.userId) return <LoggedIn />
    return (
      <div>
        <AutoForm mutation="loginWithPassword" ref="form" onSuccess={this.onSuccess}>
          <div className="label">Email</div>
          <Field
            fieldName="email"
            type={Text}
            fieldType="email"
            placeholder="Email"
            onEnter={() => this.refs.password.focus()}
          />
          <div className="label">
            <Translate tr="auth.password" />
          </div>
          <Field
            ref="password"
            fieldName="password"
            type={Text}
            fieldType="password"
            placeholder={translate('auth.password')}
            onEnter={() => this.refs.submit.click()}
          />
          <div className="description">
            <Link to="/forgot">
              <Translate tr="auth.forgotMyPassword" />
            </Link>
          </div>
        </AutoForm>
        <br />
        <Button style={{marginRight: 10}} to="/register">
          <Translate tr="auth.createAnAccount" />
        </Button>
        <Button
          ref="submit"
          onClick={() => this.refs.form.submit()}
          primary
          loading={this.props.loading}>
          <Translate tr="auth.login" />
        </Button>
      </div>
    )
  }
}
