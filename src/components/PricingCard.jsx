import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PricingCard.css'
import {ThreeCircles} from 'react-loader-spinner'

export const PricingCard = () => {
  const [ticket, setTicket] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setIsLoading(true)
    fetch('https://tl-5eu5u2nve-coopercodex.vercel.app/api/tickets')
      .then(res => res.json())
      .then((data) => {
        setIsLoading(false)
        setTicket(data)
      })
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
  ) : <div className='loader'>
  <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="brown"
  innerCircleColor="red"
  middleCircleColor="brown"
 /> 
  </div>
}
