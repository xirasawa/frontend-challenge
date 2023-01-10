import { BrowserRouter as Routes, Route } from 'react-router-dom'
import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Home from './Home'
import Search from './Search'

import styles from './Pages.module.scss'
import logoSpotify from './Spotify_Logo_RGB_White.png'

class Pages extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    const page = 'Home'
    return (
      <>
        <div className={styles.page}>
          <SubHeader
            breadcrumb={[{ text: page }]}
            heading="Desafio Front-end do Plurall"
          />

          <div className={styles.wrapper}>
            <img className={styles.logo} src={logoSpotify} alt="Logo do Spotify" />
            <Routes>
              <Route component={Home} path="/" exact />
              <Route component={Search} path="/search" exact />
            </Routes>
          </div>
        </div>
      </>
    )
  }
}

export default Pages
