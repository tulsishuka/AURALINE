import React from 'react'
import Hero from './components/sections/Hero'
import Categories from './components/sections/About'
import Feature from './components/sections/Feature'
import Six from './components/sections/Auren'
import FaQ from './components/sections/FaQ'
import Footer from './components/layout/Footer'
import FeaturedContent from './components/sections/FeaturedContent'
import FeatureCards from './components/sections/FeatureCards'

const page = () => {
  return (
   <>
   <Hero/>
  <Categories/>
   <Feature/>
   <FeatureCards/>
 <FeaturedContent/>
   <Six/>
   <FaQ/>
   <Footer/>
   </>
  )
}

export default page