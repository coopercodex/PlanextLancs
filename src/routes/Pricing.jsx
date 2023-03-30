import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import { PricingCard } from '../components/PricingCard'
import ship from '../assests/pexels-spacex-23769.jpg'

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage  heading='Pricing' text='Choose Your Journey' bg={ship} />
      <PricingCard />
      <Footer />
    </div>
  )
}
