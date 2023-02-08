import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../src/styles/Navbar.module.css'

function Navbar({tokenId}) {
  
  //router
  const router = useRouter()
  
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        {tokenId ? <button className={styles.buttonRed}
          onClick={() => {
            sessionStorage.removeItem("Token")
            router.push("/login")
          }}>Logout</button> : ""}
        {!tokenId ? <Link href="/login">Login</Link> : ""}
      </nav>
    </div>
  )
}

export default Navbar