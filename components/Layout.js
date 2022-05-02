import React from 'react'
import Nav from "../components/Nav"
import Main from "../components/Main"
import Form from '../components/Form'
import Features from './Features'
import Link from 'next/link'
import Footer from '../components/Footer'


function Layout() {
  return (
    
    
    <div className=" shrink dark:bg-slate-900 min-h-screen min-w-screen text-center inline-block  sm:w-full md:w-full lg:w-full dark:text-white "> 
        <Nav/> 
        <Main />
        <div className="m-auto w-5/12 flex justify-center items-center h-1">
        <Form />
        </div>
        <div className="  justify-center p-10 m-8 ">
        <Features />
        <div className="">
        <Footer />
        </div>

        </div>
       
        
        
        
        
        
    </div>
  )
}

export default Layout
