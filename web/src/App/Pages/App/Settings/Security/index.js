import React from 'react'
import styles from './styles.css'
import Password from './Password'
import TwoFactor from './TwoFactor'

export default class Security extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <TwoFactor />
        <Password />
      </div>
    )
  }
}
