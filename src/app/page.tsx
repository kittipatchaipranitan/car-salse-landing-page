import React from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/navigation/Sidebar'
import SlideShow from './components/image-slider/ImageSlider'
import AboutUs from './components/page/home/AboutUs'
import OurProduct from './components/page/home/OurProduct'
import ManageMentTeam from './components/page/home/ManageMentTeam'

const page = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <SlideShow />
      <AboutUs/>
      <OurProduct/>
      <ManageMentTeam/>
    </div>
  )
}

export default page