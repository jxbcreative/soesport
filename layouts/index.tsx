import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Providers from '../Provider'
import Footer from '../components/Footer'

const Layout = ({children} : {children: ReactNode}) => {
  return (
    <Providers>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </Providers>
  )
}

export default Layout