import React from 'react'
import Layout from './Layout'
import Navbar from './NavBar'

export default function HeaderFooter({children}) {
  return (
    <div className="md:container md:mx-auto">
        <Navbar/>
        {children}
        <Layout/>
    </div>
  )
}
