import React from 'react'
import "../styles/Card.css"

const CardComponent = (props) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h3>{props.title}</h3>
            </div>
            <div className='card-body'>
                <p>{props.body}</p>
            </div>
        </div>
        
    </div>
  )
}

export default CardComponent