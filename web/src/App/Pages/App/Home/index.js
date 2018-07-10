import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'

export default class Home extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Hello world</h1>
          <p>
            Irure o se malis officia, nisi proident ne efflorescere si aliqua mentitum ex
            exquisitaque, vidisse ab doctrina id ullamco eram iis litteris despicationes aut
            doctrina philosophari qui laborum est mandaremus quis voluptate voluptate, probant tamen
            quibusdam. Ab offendit comprehenderit an eu quem fugiat in doctrina. Cillum iis admodum.
            Noster proident ex velit summis.De nulla nisi tempor quamquam ne sed ne enim fugiat
            culpa, ipsum voluptate nescius, proident fugiat nulla pariatur summis. Labore ab
            iudicem, e ipsum duis te pariatur. Amet e an velit quamquam. Iis quem commodo
            distinguantur e nulla occaecat sempiternum.
          </p>
        </Container>
      </div>
    )
  }
}
