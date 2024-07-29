import React from 'react'
import "./style.scss"
import Image from 'next/image'

const InfoBrands = () => {
  return (
    <div id='infoBrands_container'>
        <div className='image-container'>
            <img className='lap-img' src='/images/laptop.jpg' alt='laptop'/>
        </div>
        <div className='info-container'>
            <div>
              <h2>Unmatched Convenience <br></br>and Flexibility</h2>
              <div className='discover'>Discover a wide range of cutting-edge laptop models at KSP Info Tech. From sleek ultrabooks to powerful gaming laptops, we have the perfect device to suit your needs and preferences.</div>
            </div>
            <div className='price-quality-info-container'>
              <div className='price-info-container'>
                  <h6>Unbeatable Prices</h6>
                  <div className='discover'>Discover a wide range of cutting- edge laptop models at KSP Info Tech. From sleek ultrabooks to powerful gaming laptops, we have the perfect device to suit your needs and preferences.</div>
              </div>
              <div className='quality-info-container'>
                <h6>Exceptional Quality</h6>
                <div className='discover'>Discover a wide range of cutting- edge laptop models at KSP Info Tech. From sleek ultrabooks to powerful gaming laptops, we have the perfect device to suit your needs and preferences.</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default InfoBrands