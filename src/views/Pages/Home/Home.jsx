import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <>
        <button className={styles.search}>
          <Link to="/search">Buscar</Link>
        </button>
      </>
    )
  }
}

export default Home
