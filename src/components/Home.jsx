import React from 'react'
import { Header } from './Header'
import { Form } from './Form'
import { Certification } from './Certification'
import { Footer } from './Footer'
import { Feature } from './Feature'
export const Home = () => {
  return (
    <div className='bg-[#0F1014] '>
        <Header/>
        <Form/>
        <Feature/>
        <Certification/>
        <Footer/>
    </div>
  )
}
