import React from 'react'
import AutoForm from 'App/components/AutoForm'
import {Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Button from 'orionsoft-parts/lib/components/Button'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import withUserId from 'App/helpers/auth/withUserId'
import LoggedIn from '../LoggedIn'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {setSession} from '@orion-js/graphql-client'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'

@withUserId
@withMessage
export default class ResetPassword extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    onLogin: PropTypes.func,
    userId: PropTypes.string,
    token: PropTypes.string
  }

  schema = {
    password: {
      type: String,
      min: 8
    },
    confirm: {
      type: String,
      custom(confirm, {doc: {password}}) {
        if (confirm !== password) {
          return 'passwordsDontMatch'
        }
      }
    },
    token: {
      type: String
    }
  }

  constructor(props) {
    super(props)
    this.form = React.createRef()
    this.submit = React.createRef()
    this.confirm = React.createRef()
  }

  @autobind
  async onSuccess(session) {
    await setSession(session)
    this.props.showMessage(<Translate tr="auth.yourPasswordHasBeenChanged" />)
    this.props.onLogin()
  }

  @autobind
  onValidationError({token}) {
    if (token === 'tokenNotFound') {
      this.props.showMessage(<Translate tr="auth.resetLinkExpired" />)
    }
  }

  render() {
    if (this.props.userId) return <LoggedIn />
    return (
      <div>
        <AutoForm
          doc={{token: this.props.token}}
          mutation="resetPassword"
          ref={this.form}
          schema={this.schema}
          onSuccess={this.onSuccess}
          onValidationError={this.onValidationError}>
          <div className="label">
            <Translate tr="auth.newPassword" />
          </div>
          <Field
            fieldName="password"
            fieldType="password"
            placeholder={translate('auth.newPassword')}
            type={Text}
            onEnter={() => this.confirm.focus()}
          />
          <div className="description">
            <Translate tr="auth.passwordRequirements" />
          </div>
          <div className="label">
            <Translate tr="auth.confirmPassword" />
          </div>
          <Field
            ref={this.confirm}
            fieldName="confirm"
            fieldType="password"
            placeholder={translate('auth.confirm')}
            type={Text}
            onEnter={() => this.submit.click()}
          />
        </AutoForm>
        <br />
        <Button ref={this.submit} onClick={() => this.form.submit()} primary>
          <Translate tr="auth.resetPassword" />
        </Button>
        <br />
        <br />
      </div>
    )
  }
}
