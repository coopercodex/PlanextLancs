import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Video } from '../components/Video'


export const Home = () => {
  return (
    <div>
      <Navbar /> 
      <Video />
      <Footer />
    </div>
  )
}
