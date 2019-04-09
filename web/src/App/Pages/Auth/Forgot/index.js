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
import Translate from 'App/i18n'

@withUserId
@withMessage
export default class ForgotPassword extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    userId: PropTypes.string
  }

  @autobind
  onSuccess() {
    this.props.showMessage(<Translate tr="auth.followInstructionsInEmail" />)
  }

  render() {
    if (this.props.userId) return <LoggedIn />
    return (
      <div>
        <AutoForm mutation="forgotPassword" ref="form" onSuccess={this.onSuccess}>
          <div className="label">Email</div>
          <Field
            fieldName="email"
            type={Text}
            placeholder="Email"
            fieldType="email"
            onEnter={() => this.refs.form.submit()}
          />
        </AutoForm>
        <br />
        <Button onClick={() => this.refs.form.submit()} primary>
          <Translate tr="auth.resetPassword" />
        </Button>
        <br />
        <br />
      </div>
    )
  }
}
