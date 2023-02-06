import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import { PricingCard } from '../components/PricingCard'

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage  heading='Pricing' text='Choose Your Journey' />
      <PricingCard />
      <Footer />
    </div>
  )
}
