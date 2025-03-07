import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default RootLayout