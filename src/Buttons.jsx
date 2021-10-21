import React from 'react'
import './Buttons.css'

const Buttons = ({ text, handleClick }) => {
  return (
    <div className="btn" onClick={handleClick}>
      {text}
    </div>
  )
}

export default Buttons
