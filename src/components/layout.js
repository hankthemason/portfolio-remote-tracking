import React from 'react'
import Header from './header'
import {} from './layout.module.css'

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      { children }
    </div>

  )
}

export default Layout