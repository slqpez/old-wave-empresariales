import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Information from '../../components/Information/Information'
import OfferCatalog  from '../../components/OfferCatalog/OfferCatalog'

function Home() {
  return (
    <div>
      <Header/>
      <OfferCatalog/>
      <Information/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
