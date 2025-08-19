import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollTotop.jsx'

function Router() {
  return (
    <>
      <Header/>
      {/* // only this part is changeable -Dynamic part  which change when we render one 
      // component to other component*/}
      <ScrollToTop />
      <Outlet/>  
      <Footer/>
    </>
  )
}

export default Router
