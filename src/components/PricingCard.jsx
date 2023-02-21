import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PricingCard.css'

export const PricingCard = () => {
  const [ticket, setTicket] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getData()
    setIsLoading(false)
  }, [])

  const getData = () => {
    fetch('https://tl-5eu5u2nve-coopercodex.vercel.app/api/tickets')
      .then(res => res.json())
      .then((data) =>
        setTicket(data))
  }

  return (!isLoading) ? (
    <div className='pricing'>
      <div className='card-container'>
        {ticket.map((card, index) => (
          <div className='card' key={index}>
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
  ) :<div className='loader'><img src='https://i.pinimg.com/originals/74/bc/5c/74bc5c25eb8a960229f43545854aabdd.gif' alt='' /> </div>
}
