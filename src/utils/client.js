// eslint-disable-next-line
import { clearToken, getToken } from 'utils'

class SomosClient {
  // eslint-disable-next-line
  constructor() {}

  onError = error => {
    // eslint-disable-next-line
    console.error('error', error.status)
  }

  async getArtists() {
    let response

    fetch(
      'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(r => {
        if (r.status !== 200) {
          this.onError(r)
        }
        return r.json()
      })
      .then(json => {
        response = json
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      })

    return response
  }
}

export default SomosClient
