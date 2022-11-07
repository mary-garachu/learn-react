import React from 'react'
import image from '../images/image.jpeg'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'
import image5 from '../images/image5.jpeg'
import image6 from '../images/image6.jpeg'
import image7 from '../images/image.jpeg'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery-img'>
      <img src={image} alt="img"/>
      </div>
      <div className='gallery-img'>
      <img src={image1} alt="img"/>
      </div>
      <div className='gallery-img'>
      <img src={image2} alt="img"/>
      </div>
      <div className='gallery-img'>
      <img src={image3} alt="img"/>
      </div>
    </div>
  )
}

export default Gallery