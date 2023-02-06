import React from 'react'
import './Training.css'
import { Link } from 'react-router-dom'
import trainingPic from '/Users/derekcooper/turing_work/pro/travelelysium/src/assests/joe-han-wApvRc5-nrk-unsplash.jpg'
import station from '/Users/derekcooper/turing_work/pro/travelelysium/src/assests/vecteezy_astronaut-edward-white-during-first-extravehicular-activity__606.jpeg'

export const TrainingPage = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum repudiandae possimus modi, quod soluta repellendus facilis, sequi repellat dolores accusantium sapiente, necessitatibus maiores inventore doloribus numquam eligendi iste odit distinctio!</p>
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
