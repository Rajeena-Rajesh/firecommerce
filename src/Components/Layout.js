import React from 'react'
//import Homepage from '../pages/Homepage'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
  return (
    <div>
      <Header/>
      <div className="content">
     {props.children}
    </div>
    <Footer/>

    </div>
  )
}

export default Layout
