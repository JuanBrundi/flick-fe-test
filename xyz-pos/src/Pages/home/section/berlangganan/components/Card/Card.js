import React from 'react'

import './Card.css'

function Card({datum}) {
  return (
    <div className="card-container">
      {/* Header */}
      <div className="header">
        <span className="header-content">Best Seller!</span>
      </div>

      {/* Price */}
      <div>
        <div className="price-title">
          <span>
            {datum.title}
          </span>
        </div>
        <div className="price-content">
          <span className="rp">Rp</span>
          <span className="rupiah">{datum.harga}</span>
          <span className="bulan">/bulan</span>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits-container">
        {
          datum.benefit.map(el => {
            return <div className="benefits-points">
            <img src="/Assets/check_circle-24px.svg" alt="..." />
          <p>{el}</p>
          </div>
          })
        }
      </div>

      {/* Button Aku Mau */}
      <div className="card-button">
        <button className="btn">Aku mau!</button>
      </div>
    </div>
  )
}

export default Card
