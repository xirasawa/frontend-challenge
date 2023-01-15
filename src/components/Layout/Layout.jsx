import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient } from 'utils'

import styles from './Layout.module.scss'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {}

  componentDidMount() {}

  client = new SomosClient({
    accessToken: getToken(),
  })

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { layout, content, footer, 'nav-bar': navBar } = styles

    return (
      <>
        <div className={layout}>
          <div className={navBar}>
            <NavBar
              data={{
              menu: { items: [{ name: 'Home', slug: 'account', id: 0, href: '/' }, { name: 'Search', slug: 'account', id: 1, href: '/search' }] },
            }}
              logout={this.handleLogout}
              service="reader"
              userToken={getToken()}
            />
          </div>

          <div className={content}>{children}</div>

          <div className={footer}>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Layout
