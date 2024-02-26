import React from 'react'
import Products from '../components/Products/Products'
import TopProducts from '../components/TopProducts/TopProducts'
import Banner from '../components/Banner/Banner'
import Subscribe from '../components/Subscribe/Subscribe'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
    </div>
  )
}

export default Home
