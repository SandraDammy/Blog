import React from 'react'
import Links from './links/Links'
import Styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <Link href="/" className={Styles.logo}>Logo</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar