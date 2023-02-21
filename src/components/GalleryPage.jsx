import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems } from '../redux/gallerySlice'
import './RoverPage.css'
import './GalleryPage.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import { removeFromGallery } from '../redux/gallerySlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

export const GalleryPage = () => {
  const items = useSelector(selectItems)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState("false")
  const dispatch = useDispatch()

  const handleClose = () => setOpen(false)

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
  };


  return (
    <>
      <div className='rover-container'>
        <div className='rover'>
          {items.length > 0 ? (
            <>
              {items.map((item, index) => (
                <div className="roverInfo" key={index}>
                  <h1>Rover Name: {item.rover.name}</h1>
                  <h4><AlarmOffIcon className='remove' onClick={() => {
                    dispatch(removeFromGallery(item.id))
                    toast.info("Item removed from gallery", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                  }} /> from gallery</h4>
                  <img src={item.img_src} alt="rover images" width={'100%'} height={'100%'} onClick={(e) => handleImage(item.img_src)} />
                  <p>Landing Date: {item.rover.landing_date}</p>
                  <p>Date of Taken: {item.earth_date}</p>
                  <p>Status: <span>{item.rover.status}</span></p>
                </div>
              ))}
              <Modal
                className='modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                closeAfterTransition >
                <Box className='box-style'>
                  <Typography>
                    <div className='modal-rights'>
                      <p className="closeBtnn" onClick={handleClose}>X</p>
                      <img
                        src={image}
                        alt="rover"
                        className='box-style'
                      />
                      <p>Photo from NASA</p>
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </>
          ) : (<div>
            <h1 className='gallery-prompt' style={{ color: 'white' }}>No photos archived! Head over to the <Link to='/rover'>Rover Page</Link> to add some!</h1>
          </div>)}
        </div>
      </div>
    </>
  )
}
