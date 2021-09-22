import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Information from '../../components/Information/Information'

function Home() {
  return (
    <div>
      <Header/>
      <Information/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
