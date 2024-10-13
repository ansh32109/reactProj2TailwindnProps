import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
        <div className='card'>
            This is a sample card
            <p>Welcomeeee {props.userName}</p>
        </div>
    </>
  )
}

export default Card