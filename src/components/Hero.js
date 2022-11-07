import React from 'react'
import { NavLink } from 'react-router-dom'


const Hero = ({ image, title }) => {
  return (
    <div className='hero' style={{backgroundImage:image}}>
      <h2 className='heroContent'>{title}</h2>
      <NavLink className='heroContent_1' to="/about">Read More</NavLink>
    </div>
  )
}

export default Hero