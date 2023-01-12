import React from 'react'

import styles from './Artist.module.scss'


class Artist extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className={styles.artistpage}>
          <div className={styles.artist}>
            <div className={styles.background}>
              <h1>NOME</h1>
              <p>Popularidade</p>
            </div>
          </div>
          <div className={styles.music}>
            <div className={styles.genres}>
              <div className={styles.genre}>rock</div>
            </div>
            <div className={styles.albums}>
              <div className={styles.album}>
                <img src="https://picsum.photos/640/640" alt="foto do album" />
                <h2>NOME</h2>
                <p>data</p>
              </div>
              {/* <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                  </div>
                  <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                  </div>
                  <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                  </div>
                  <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                  </div>
                  <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                  </div>
                  <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <h2>NOME</h2>
                  <p>data</p>
                </div> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Artist
