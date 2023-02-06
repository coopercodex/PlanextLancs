import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import { TrainingPage } from '../components/TrainingPage'

export const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Training' text='Pre & In-Flight Training' />
      <TrainingPage />
      <Footer />
    </div>
  )
}
