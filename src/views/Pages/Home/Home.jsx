import React from 'react'

import styles from './Home.module.scss'

class Home extends React.Component {
  state = {}

  render() {
    return (
      <>
        <button className={styles.search}>Buscar</button>
      </>
    )
  }
}

export default Home
