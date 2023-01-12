import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Search.module.scss'
import magnifier from './magnifier.png'


class Search extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className={styles.search}>
          <p>Busque seus artistas preferidos!</p>
          <input type="text" placeholder="Quem você quer ouvir...?" />
          <Link className={styles.link} to="/artist">
            <button className={styles.buttonSearch}>
              Search
            </button>
          </Link>
          <img className={styles.magnifier} src={magnifier} alt="Lupa" />
        </div>
      </>
    )
  }
}

export default Search
