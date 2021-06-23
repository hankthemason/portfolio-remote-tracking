import React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  name,
  nameLink,
  navLinkItem,
  container, 
  line
} from './header.module.css'

const Header = () => {

  return (
    <>
      <div className={container}>
        <div className={nameLink}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className={name}>Hank Mason</h1>
          </Link>
        </div>
        <div className={navLinks}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to='/about'>About Me</Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/projects'>My Projects</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className={line}></hr>
    </>
  )
}

export default Header