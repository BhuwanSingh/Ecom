import React from 'react'
import Announcement from '../Layouts/Announcements'
import Categories from '../Layouts/Categories'
import Navbar from '../Layouts/Navbar'
import Slider from '../Layouts/Slider'
import Products from '../Layouts/Products'
import NewsLetter from '../Layouts/NewsLetter'
import Footer from '../Layouts/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
