import React from 'react'
import './Video.css'
import marsVideo from '../assests/vecteezy_3-d-animated-footage-of-planet-mars_2158564.mp4'
import { Link } from 'react-router-dom'


export const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={marsVideo} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Travel Elysium Planitia.</h1>
        <p>Welcome to the universe.</p>
        <div>
          <Link to='/training' className='btn'>Training</Link>
          <Link to='/contact' className='btn btn-light'>Takeoff</Link>
        </div>
      </div>
    </div>
  )
}
