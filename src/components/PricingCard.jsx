import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PricingCard.css'

export const PricingCard = () => {
  const [ticket, setTicket] = useState([])
  
  

  useEffect(() => {
    getData()
  }, [])
 
  const getData = () => {
    fetch('https://tl-5eu5u2nve-coopercodex.vercel.app/api/tickets')
      .then(res => res.json())
      .then((data) =>
      // console.log(data))
        setTicket(data))
  }
  
  return (
    <div className='pricing'>
      <div className='card-container'>
        {ticket.map((card) => (
          <div className='card'>
            <h3>-{card.title}-</h3>
            <span className='bar'></span>
            <p className='currency'>{card.price} Million BTC</p>
            {card.type.map((amen) => (
              <p>-{amen}-</p>
            ))}
            <Link to='/contact' className='btn'>Book</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
