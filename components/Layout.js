import React, { useContext } from 'react'
import { AppContext } from './Context'
import Navbar from './Navbar'

function Layout({ children }) {
    const {tokenId} = useContext(AppContext)
    return (
        <>
            {/* NAVBAR */}
            <div className='p-fixed top-0 z-99 w-full'>
                <Navbar tokenId={Boolean(tokenId)} />
            </div>
            <main>
                {children}
            </main>

        </>

    )
}

export default Layout