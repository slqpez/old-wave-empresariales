import React from 'react'
import BannerMain from '../../components/BannerMain/BannerMain'
import MainSection from "../../components/MainSection/MainSection"
import OfferCatalog  from '../../components/OfferCatalog/OfferCatalog'

function Home() {
  return (
    <div>
      <BannerMain/>
      <MainSection/>
      <OfferCatalog/>
    </div>
  )
}

export default Home
