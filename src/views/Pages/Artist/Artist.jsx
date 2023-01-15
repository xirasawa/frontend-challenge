import React from 'react'

import styles from './Artist.module.scss'


class Artist extends React.Component {
  state = {}

  render() {
    return (
      <>
        <div className={styles.containerArtistpage}>
          <div className={styles.artistpage}>
            <div className={styles.artist}>
              <div className={styles.background} />
              <h1 className={styles.name}>NOME</h1>
              <p className={styles.pop}>Popularidade: 0/100</p>
            </div>
            <div className={styles.music}>
              <h2 className={styles.text}>GENEROS</h2>
              <div className={styles.genres}>
                <div className={styles.genre}>rock</div>
              </div>
              <h2 className={styles.text}>ALMBUNS</h2>
              <div className={styles.albums}>
                <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <div className={styles.contentAlbum}>
                    <h2>NOME</h2>
                    <p>data</p>
                  </div>
                </div>
                <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <div className={styles.contentAlbum}>
                    <h2>NOME</h2>
                    <p>data</p>
                  </div>
                </div>
                <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <div className={styles.contentAlbum}>
                    <h2>NOME</h2>
                    <p>data</p>
                  </div>
                </div>
                <div className={styles.album}>
                  <img src="https://picsum.photos/640/640" alt="foto do album" />
                  <div className={styles.contentAlbum}>
                    <h2>NOME</h2>
                    <p>data</p>
                  </div>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Artist
