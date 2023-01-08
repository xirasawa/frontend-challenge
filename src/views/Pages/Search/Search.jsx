import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Search.module.scss'

class Search extends React.Component {
  state = {}

  render() {
    return (
      <>
        <button className={styles.search}>
          <Link to="/">Home</Link>
        </button>
      </>
    )
  }
}

export default Search
