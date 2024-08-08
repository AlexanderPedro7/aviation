import React from 'react'
import { Carousel } from 'react-bootstrap'
import About from '../Component/About'
import ImageCarousel from '../Component/Carousel'

const Home = () => {
  return (
    <div>
      <ImageCarousel/>
      <About/>
    </div>
  )
}

export default Home