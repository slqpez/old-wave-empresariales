import React from 'react'
import BannerMain from '../../components/BannerMain/BannerMain'
import Header from '../../components/Header/Header'
import MainSection from "../../components/MainSection/MainSection"
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Information from '../../components/Information/Information'
import OfferCatalog  from '../../components/OfferCatalog/OfferCatalog'

function Home() {
  return (
    <div>
      <Header/>
      <BannerMain/>
      <MainSection/>
      <OfferCatalog/>
      <Information/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
