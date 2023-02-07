import React from 'react'
import './HeroImage.css'

export const HeroImage = ({ heading, text, bg }) => {
  return (
    <div className='hero-img' style={{ background: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
      <div className='heading'>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
