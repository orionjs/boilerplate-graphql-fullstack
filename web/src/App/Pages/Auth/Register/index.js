import React from 'react'
import AutoForm from 'App/components/AutoForm'
import {Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Button from 'orionsoft-parts/lib/components/Button'
import ObjectField from 'App/components/fields/ObjectField'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import withUserId from 'App/helpers/auth/withUserId'
import LoggedIn from '../LoggedIn'
import {Link} from 'react-router-dom'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'

@withUserId
export default class Register extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func,
    userId: PropTypes.string
  }

  @autobind
  async onSuccess(session) {
    await setSession(session)
    this.props.onLogin()
  }

  render() {
    if (this.props.userId) return <LoggedIn />
    return (
      <div>
        <AutoForm mutation="createUser" ref="form" onSuccess={this.onSuccess}>
          <Field fieldName="profile" type={ObjectField} style={null}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="label">
                  <Translate tr="auth.name" />
                </div>
                <Field fieldName="firstName" type={Text} placeholder={translate('auth.name')} />
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="label">
                  <Translate tr="auth.lastName" />
                </div>
                <Field fieldName="lastName" type={Text} placeholder={translate('auth.lastName')} />
              </div>
            </div>
          </Field>
          <div className="label">Email</div>
          <Field fieldName="email" type={Text} fieldType="email" placeholder="Email" />
          <div className="label">
            <Translate tr="auth.password" />
          </div>
          <Field
            fieldName="password"
            type={Text}
            fieldType="password"
            placeholder={translate('auth.password')}
          />
        </AutoForm>
        <br />
        <Button onClick={() => this.refs.form.submit()} primary>
          <Translate tr="auth.createAccount" />
        </Button>
        <br />
        <br />
        <div>
          <Translate tr="auth.ifYouHaveAnAccount" />{' '}
          <Link to="/login">
            <Translate tr="auth.login" />
          </Link>
        </div>
      </div>
    )
  }
}
