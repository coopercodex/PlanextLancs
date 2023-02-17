import React from 'react'
import astronaut from '../assests/vecteezy_apollo-11-mission-image-astronaut-edwin-aldrin-poses__107.jpeg'
import "./Modal.css"


export const Modal = ({open, onClose}) => {
  if (!open) {
    return null;
  }

  return (
    <div onClick={onClose} className='overlays'>
     <div onClick={(e) => {e.stopPropagation()}} className="modalContainer">
      <img src={astronaut} alt="astronaut ad" />
      <div className="modalRight">
        <p className="closeBtn" onClick={onClose}>X</p>
        <div className="contents">
          <p>Want To Be The First?</p>
          <h1>1 Basic Package</h1>
          <p>Enter To Win!</p>
        </div>
        <div className="btnContainer">
          <button className='btn-primary' onClick={onClose}>
            <span>Yes!</span>, Take Me There!
          </button>
          <button className='btn-outline' onClick={onClose}>
            <span className='bold'>No</span>, Thanks
          </button>
        </div>
      </div>
     </div>
    </div>
  )
}
