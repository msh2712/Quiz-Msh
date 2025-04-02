import React from 'react'
import Footer from './Footer'

function Layout({ Component }) {
  return (
    <div className=' w-100 d-flex justify-content-center align-items-center flex-column'>
      <div className="glass-card p-3 ">
        <Component />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout