import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContactUs from "../../components/contactUs/ContactUs"
import GetStarted from '../../components/GetStarted/GetStarted'
import HeroSection from '../../components/hero/HeroSection'
import Practice from '../../components/practiceSection/Practice'
import Community from '../../components/community/Community'
import Help from '../../components/help/Help'
import Benefit from '../../components/benefit/Benefit'

const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Benefit />
    <Help />
    <Practice />
    <Community />
    <GetStarted />
    <ContactUs />
    <Footer />
    </>
  )
}

export default HomePage