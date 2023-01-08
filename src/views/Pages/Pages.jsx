import { BrowserRouter as Routes, Route } from 'react-router-dom'
import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Home from './Home'
import Search from './Search'

import styles from './Pages.module.scss'

class Pages extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    const page = 'Home'
    return (
      <>
        <SubHeader
          breadcrumb={[{ text: page }]}
          heading="Desafio Front-end do Plurall"
        />

        <div className={styles.wrapper}>
          <Routes>
            <Route component={Home} path="/" exact />
            <Route component={Search} path="/search" exact />
          </Routes>
        </div>
      </>
    )
  }
}

export default Pages
