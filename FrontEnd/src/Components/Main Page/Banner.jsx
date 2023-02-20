import React from 'react'

var banner={
  backgroundImage: 
  "url('./images/banner1.jpg')",
}
export default function Banner() {
  return (
    <>
      <section id="banner" style={banner}>
        <h4>Repair Service</h4>
        <h2>Upto <span>70% off </span>- All t-shirts & Accessories</h2>
        <button class="normal">Explore More</button>
    </section>
    </>
  )
}
