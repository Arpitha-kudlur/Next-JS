import React from 'react'
import LandingPage from '../../Components/Home/Home'
import BrandsOffered from "../../Components/Brands/Brands"
import InfoBrands from "../../Components/InfoBrands/InfoBrands"

const page = () => {
  return (
    <div>
        <LandingPage/>
        <BrandsOffered/>
        <InfoBrands/>
    </div>
  )
}

export default page