import React from 'react'
import Header from '../navbar/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../navbar/Footer'
import Search from './Search'

const Layout = () => {
  return (
    <div>
        <Header />
        <Search />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout