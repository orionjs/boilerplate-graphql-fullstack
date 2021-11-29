import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import Translate from 'App/i18n'

export default class ErrorHandler extends React.Component {
  state = {}

  static getDerivedStateFromError(error) {
    if (!error.isApolloError) throw error
    return {error}
  }

  componentDidCatch(error, info) {
    if (!error.isApolloError) throw error
    console.log('Apollo error', error.errors)
  }

  renderError() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <Container>
            <Translate tr="misc.error" />
          </Container>
        </div>
        <div className={styles.message}>
          <Container>{this.state.error.message}</Container>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.error) return this.renderError()
    return this.props.children
  }
}
