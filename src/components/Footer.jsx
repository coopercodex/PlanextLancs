import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>123 Elysm Dr.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} /> 1-900-mars-trvl</h4>
          </div>
          <div className='phone'>
            <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />travelmars@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Our Company</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur vero optio ad labore earum animi odio iusto eos, minima qui a illo reiciendis harum
            dicta neque porro officiis mollitia ullam!</p>
          <div className='social'>
            <FaFacebook size={30} style={{ color: 'white', marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: 'white', marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
