import React from 'react'

import styles from './Search.module.scss'
import magnifier from './magnifier.png'


class Search extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className={styles.search}>
          <p>Busque seus artistas preferidos!</p>
          <button className={styles.buttonSearch}>Search</button>
          <input type="text" placeholder="Quem você quer ouvir...?" />
          <img className={styles.magnifier} src={magnifier} alt="Lupa" />
        </div>
      </>
    )
  }
}

export default Search
