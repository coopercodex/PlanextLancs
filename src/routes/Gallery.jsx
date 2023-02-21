import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import gallery from '../assests/vecteezy_apollo-11-mission-image-astronaut-edwin-aldrin-poses__107.jpeg'
import { GalleryPage } from '../components/GalleryPage'

export const Gallery = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Gallery' text='View your saved lander photos' bg={gallery}/>
      <GalleryPage />
      <Footer />
    </div>
  )
}
