import React from 'react'
import "./Card.css"

const Cards = props => {
  return (
      <div className='card__body'>
      <img src={props.cardImage} className='card__Image'alt="" />
      <h2>{props.title}</h2>
      <div className="card__content">
        <p>{props.content }</p>
      </div>
    </div>
  )
}


export default Cards