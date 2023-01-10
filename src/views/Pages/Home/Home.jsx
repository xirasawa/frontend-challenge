import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import imageSpotify from './spotifyIcon.png'
import imagePlurall from './plurallIcon.png'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className={styles.home}>
          <div className={styles.switchImage}>
            <a href="https://www.spotify.com/br/premium/?utm_source=br-pt_brand_contextual-desktop_text&utm_medium=paidsearch&utm_campaign=alwayson_latam_br_premiumbusiness_core_brand+contextual-desktop+text+exact+br-pt+google&gclid=EAIaIQobChMIiZL6pPy7_AIVUeVcCh1V8wksEAAYASAAEgJNaPD_BwE&gclsrc=aw.ds" target="_blank" rel="noreferrer">
              <img src={imageSpotify} alt="Logo do Spotify" />
            </a>
            <a href="https://www.plurall.net" target="_blank" rel="noreferrer">
              <img src={imagePlurall} alt="Logo do Plurall" />
            </a>
          </div>
          <Link to="/search">
            <button className={styles.button}>
              BUSCAR ARTISTAS
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
