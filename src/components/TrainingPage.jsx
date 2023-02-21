import React from 'react'
import './Training.css'
import { Link } from 'react-router-dom'
import trainingPic from '../assests/joe-han-wApvRc5-nrk-unsplash.jpg'
import station from '../assests/vecteezy_astronaut-edward-white-during-first-extravehicular-activity__606.jpeg'

export const TrainingPage = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Welcome to the training page! Our thorough training will insure that you are well prepared for your trip to mars. With the help of NASA you will be ready for your intergalactic trip in no time at all! (actually about 18 months)</p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={trainingPic} alt='astronauts training' className='img1' />
          </div>
          <div className='image-stack bottom'>
            <img src={station} alt='astronauts training' className='img1' />
          </div>
        </div>
      </div>
    </div>
  )
}
