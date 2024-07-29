import React from 'react'
import Image from 'next/image'
import "./style.scss"

const LandingPage = () => {
  return (
    <div id='landingpage_container'>
      <div className='title-container' >
        
        <h1>Buy, Rent, or Service - Tailored<br></br> Solutions Just for You</h1>
        <div className='subtitle'>Discover a seamless way to buy, rent, and service laptops. Flexible plans, top brands, and expert <br/>maintenance – all at your fingertips.</div>
        <button className='button-explore'>Explore</button>
      </div>
        <div>
          <img className='landing-image' src='/images/laptop.jpg' alt='laptop'/>

          
        
          
          </div>
    </div>
  )
}

export default LandingPage
