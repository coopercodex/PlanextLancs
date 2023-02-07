import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import { TrainingPage } from '../components/TrainingPage'
import mars from '../assests/nasa-E7q00J_8N7A-unsplash.jpg'

export const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Training' text='Pre & In-Flight Training' bg={mars} />
      <TrainingPage />
      <Footer />
    </div>
  )
}
