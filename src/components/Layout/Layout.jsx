import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className='bg-customGray-50'>
      <Header />
      <main className='px-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout