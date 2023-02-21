import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImage } from '../components/HeroImage'
import { Navbar } from '../components/Navbar'
import rover from '../assests/vecteezy_curiosity-self-portrait-at-okoruso-drill-hole-may-11-2016_3160655.jpg'
import { GalleryPage } from '../components/GalleryPage'

export const Gallery = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Gallery' text='View your saved lander photos' bg={rover}/>
      <GalleryPage />
      <Footer />
    </div>
  )
}
