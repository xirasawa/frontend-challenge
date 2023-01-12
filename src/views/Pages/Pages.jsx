import { BrowserRouter as Routes, Route } from 'react-router-dom'
import React from 'react'

import { SomosClient } from 'utils'
import Home from './Home'
import Search from './Search'
import Artist from './Artist'

import styles from './Pages.module.scss'
import logoSpotify from './Spotify_Logo_RGB_White.png'

class Pages extends React.Component {
  client = new SomosClient()

  render() {
    this.client.getArtists()
    return (
      <>
        <div className={styles.page}>
          <img className={styles.logo} src={logoSpotify} alt="Logo do Spotify" />
          <div className={styles.wrapper}>
            <Routes>
              <Route component={Home} path="/" exact />
              <Route component={Search} path="/search" exact />
              <Route component={Artist} path="/artist" exact />
            </Routes>
          </div>
        </div>
      </>
    )
  }
}

export default Pages
