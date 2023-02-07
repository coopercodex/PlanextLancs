import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'
import { Navbar } from '../components/Navbar'
import { Video } from '../components/Video'


export const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setOpenModal(true)
  }, [])
  
  return (
    <div> 
      {/* <button onClick={() => setOpenModal(true)}>Modal</button> */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Navbar /> 
      <Video />
      <Footer />
    </div>
  )
}
