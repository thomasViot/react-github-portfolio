import React from 'react'
import Description from '../components/Description'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Description />
      <Footer />
    </div>
  )
}

export default Home