import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import { RoverPage } from '../components/RoverPage'
import rover from '../assests/vecteezy_curiosity-self-portrait-at-okoruso-drill-hole-may-11-2016_3160655.jpg'

export const Rover = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Rover' text='Mars Rover Info & Photos' bg={rover}/>
      <RoverPage />
      <Footer />
    </div>
  )
}
