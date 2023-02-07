import React from 'react'
import './Form.css'

export const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Details</label>
        <textarea rows='6' placeholder='Type us a message' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
