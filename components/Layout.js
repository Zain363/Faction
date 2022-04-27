import React from 'react'
import Nav from "../components/Nav"
import Main from "../components/Main"
import Form from '../components/Form'
import Features from './Features'
import Link from 'next/link'
import Footer from '../components/Footer'


function Layout() {
  return (
    
    <div className="dark:bg-slate-900 text-center sm:text-left inline-block">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Nav />
        <Main />
        <div className="m-auto w-5/12 flex justify-center items-center h-1">
        <Form />
        </div>
        <div className=" flex justify-center p-10 m-8 ">
        <Features />
        <Footer />
        </div>
      
        
        
        
    </div>
  )
}

export default Layout
