import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Home from './Home'

import styles from './Pages.module.scss'

class Pages extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Desafio Front-end do Plurall"
        />
        <div className={styles.wrapper}>
          <Home />
        </div>
      </>
    )
  }
}

export default Pages
