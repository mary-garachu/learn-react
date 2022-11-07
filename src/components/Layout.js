import React from 'react'
import Header from './Header'
import Hero from './Hero'


const Layout = () => {
  

  return (
    <div>
      <Header/>
      <Hero title={'welcome here'} image = {'url("https://uploads-ssl.webflow.com/5da5d4470608e619e910aa13/5db5a01583d31e6d88585035_IMG_5847-2.jpg")'}/>
      </div>
  )
}

export default Layout