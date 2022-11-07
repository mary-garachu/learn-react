import React from 'react'

const Values = ({heading, value}) => {
  return (
    <div className='values'>
        <h2>{heading}</h2>
        <p style={{ maxWidth: '45%', height: '20vh'}}>{value}</p>
    </div>
  )
}

export default Values