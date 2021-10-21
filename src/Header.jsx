import React from 'react'
import './Header.css'

const Header = ({ changeLimit, limit, getFacts }) => {
  return (
    <header>
      <h1>Cat facts</h1>
      <div>
        <input
          value={limit}
          type="number"
          onChange={(e) => {
            changeLimit(e)
          }}
        />
        <button onClick={getFacts}>Click</button>
      </div>
    </header>
  )
}

export default Header
