import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import styles from '../src/styles/Navbar.module.css'
import Logo from "../src/images/logo.png"

import {toast} from "react-toastify"

function Navbar({tokenId}) {
  //router
  const router = useRouter()
  
  return (
    <div className={styles.navbar}>
      <Image src={Logo} className={styles.logo} alt="logo" />
      <nav className={styles.nav}>
        {tokenId ? <button className={styles.buttonRed}
          onClick={() => {
            sessionStorage.removeItem("Token")
            toast.error("logged out")
            setTimeout(() => {
              router.push("/login")
            }, 1000);
          }}>Logout</button> : ""}
        {!tokenId ? <Link href="/login">Login</Link> : ""}
      </nav>
    </div>
  )
}

export default Navbar