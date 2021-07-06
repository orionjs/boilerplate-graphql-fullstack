import React from 'react'
import styles from './styles.css'
import Section from 'App/components/Section'
import Button from 'orionsoft-parts/lib/components/Button'
import AutoForm from 'App/components/AutoForm'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import PropTypes from 'prop-types'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Translate from 'App/i18n'

const fragment = gql`
  fragment setUserProfileFragment on User {
    _id
    profile {
      name
      firstName
      lastName
    }
  }
`

@withGraphQL(gql`
  query getMyProfile {
    me {
      ...setUserProfileFragment
    }
  }
  ${fragment}
`)
@withMessage
export default class Profile extends React.Component {
  static propTypes = {
    me: PropTypes.object,
    showMessage: PropTypes.func
  }

  state = {}

  constructor(props) {
    super(props)
    this.form = React.createRef()
  }

  render() {
    if (!this.props.me) return
    return (
      <div className={styles.container}>
        <Section
          top
          title={<Translate tr="settings.profile" />}
          description={<Translate tr="settings.profileDescription" />}>
          <AutoForm
            mutation="setUserProfile"
            ref={this.form}
            doc={{userId: this.props.me._id, profile: this.props.me.profile}}
            onSuccess={() =>
              this.props.showMessage(<Translate tr="settings.yourProfileWasSaved" />)
            }
            fragment={fragment}
            omit={['userId']}
          />
          <br />
          <Button onClick={() => this.form.submit()} primary>
            <Translate tr="global.save" />
          </Button>
        </Section>
      </div>
    )
  }
}
