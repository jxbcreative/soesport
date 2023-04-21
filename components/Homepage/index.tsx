import React from 'react'
import MediaQuery from '../MediaQuery';
import HeroSection from './Section/HeroSection';
import BrandSection from './Section/BrandSection';
import ProductSection from './Section/ProductSection';

const Homepage = () => {
  const isMobile = MediaQuery("(max-width: 600px)");

  return (
    <div>
      <HeroSection isMobile={isMobile}/>
      <BrandSection isMobile={isMobile}/>
      <ProductSection isMobile={isMobile}/>
    </div>
  )
}

export default Homepage