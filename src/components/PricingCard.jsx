import React from 'react'
import { Link } from 'react-router-dom'
import './PricingCard.css'

export const PricingCard = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3>-Basic-</h3>
          <span className='bar'></span>
          <p className='currency'>1.1 Billion BTC</p>
          <p>-7 Days-</p>
          <p>-Views-</p>
          <p>-Featured-</p>
          <p>-Private Pod-</p>
          <Link to='/contact' className='btn'>Book</Link>
        </div>
        <div className='card'>
          <h3>-Basic-</h3>
          <span className='bar'></span>
          <p className='currency'>3.1 Billion BTC</p>
          <p>-21 Days-</p>
          <p>-Views-</p>
          <p>-Featured-</p>
          <p>-Private Terra-</p>
          <Link to='/contact' className='btn'>Book</Link>
        </div>
      </div>
    </div>
  )
}
