import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './RoverPage.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import { useDispatch } from 'react-redux';
import { addToGallery } from '../redux/gallerySlice';
import { toast } from 'react-toastify';
import {ThreeCircles} from 'react-loader-spinner'


export const RoverPage = () => {
  let imagePerPage = 10;
  const [rover, setRover] = useState([])
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState("false")
  const [next, setNext] = useState(imagePerPage)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = () => setOpen(false)

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
  };

  const handleMoreImage = () => {
    setNext(next + imagePerPage)
  }

  const getData = () => {
    setIsLoading(true)
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ycDXcq80LOk6odKK3cdhjiMAH8sabLWN1dHDZkqR')
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setRover(data.photos)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (!isLoading) ? (
    <>
    <div className='rover-container'>
      <div className='rover'>
        {rover?.slice(0, next).map((photo, index) => (
          <div className="roverInfo" key={index}>
            <h1>Rover Name: {photo.rover.name}</h1>
            <h4><AlarmAddIcon className='add' onClick={() => {dispatch(addToGallery(photo))
            toast.success('Added to the gallery!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
              }} /> to gallery</h4>
            <LazyLoadImage src={photo.img_src} alt="rover images" width={'100%'} height={'100%'} onClick={(e) => handleImage(photo.img_src)} />
            <p>Landing Date: {photo.rover.landing_date}</p>
            <p>Date of Taken: {photo.earth_date}</p>
            <p>Status: <span>{photo.rover.status}</span></p>
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
      </div>
    </div>
    <div className='load-more'>
      {next < rover.length && (
          <button className='loadBtn' onClick={handleMoreImage}>Load More</button>
          )}
    </div>
    </>
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
