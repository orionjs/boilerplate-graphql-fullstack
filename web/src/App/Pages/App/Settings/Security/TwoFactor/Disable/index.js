import React from 'react'
import styles from './styles.css'
import HasTwoFactorIcon from 'react-icons/lib/md/lock'
import Button from 'orionsoft-parts/lib/components/Button'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation disableTwoFactor {
    disableTwoFactor {
      _id
      hasTwoFactor
    }
  }
`)
@withMessage
export default class Disable extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    disableTwoFactor: PropTypes.func
  }

  @autobind
  async disableTwoFactor() {
    try {
      await this.props.disableTwoFactor()
      this.props.showMessage('La autenticación de dos factores fue deshabilitada correctamente')
    } catch (error) {
      this.props.showMessage(error)
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <HasTwoFactorIcon size={28} className={styles.twoFactorActivatedIcon} />
        <span className={styles.twoFactorActivatedText}>
          Autentificación de dos factores activada
        </span>
        <div className={styles.yourAccountIsSecure}>Tu cuenta es más segura</div>
        <br />
        <Button danger onClick={this.disableTwoFactor}>
          Quitar Dos Factores
        </Button>
      </div>
    )
  }
}
