import React from 'react'
import classes from '../images/classes.jpg'


const Services = ({ image, text }) => {
  return (
    <div className='serviceCard'>
      <img src={image} alt="img" style={{ maxWidth: '45%'}}/>
      <p> { text } </p>
    </div>
  )
}

export default Services