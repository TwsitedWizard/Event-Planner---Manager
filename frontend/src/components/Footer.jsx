import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Malibu</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='E-Mail' />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your e-mail  address to receive news and updates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer