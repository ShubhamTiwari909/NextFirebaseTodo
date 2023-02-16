import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import styles from '../src/styles/Navbar.module.css'
import Logo from "../src/images/logo.png"
import { logout } from '../methods/Logout'


function Navbar({tokenId}) {
  //router
  const router = useRouter()
  
  return (
    <div className={styles.navbar}>
      <Image src={Logo} className={styles.logo} alt="logo" />
      <nav className={styles.nav}>
        {tokenId ? <button className={styles.buttonRed}
          onClick={() => logout(router)}>Logout</button> : ""}
      </nav>
    </div>
  )
}

export default Navbar