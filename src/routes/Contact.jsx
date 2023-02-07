import React from 'react'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import sat from '../assests/nasa-wAkLQnT2TC0-unsplash.jpg'

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage  heading='Contact' text='Contact Planext Lancs' bg={sat} />
      <Form />
      <Footer />
    </div>
  )
}
