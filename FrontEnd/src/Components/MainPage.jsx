import React from 'react'
import Header from './Main Page/Header'
import Services from './Main Page/Services'
import FeaturesArrival from './Main Page/FeaturesArrival'
import Banner from './Main Page/Banner'
import NewArrival from './Main Page/NewArrival'
import Deals from './Main Page/Deals';
import Footer from './Footer'



export default function MainPage() {
  return (
    <div>
     
      <Header />
      <Services />
      <FeaturesArrival />
      <Banner/>
      <NewArrival />
      <Deals />
      <Footer></Footer>
   
   
    </div>
  )
}
