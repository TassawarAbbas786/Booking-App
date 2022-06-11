import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/feature/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='home-container'>
          <Featured />
          <h1 className='home-title'>Browse By Property Type</h1>
          <PropertyList/>
          <h1 className='home-title'>Home Guest Love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home