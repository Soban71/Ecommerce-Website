import React from 'react';


export default function Header() {
  
    const myStyle={
        backgroundImage:
 "url('./images/background.jpg')",
 webkitFilter: "grayscale(40%)", 
 filter: "grayscale(40%)",
 marginTop:"0px",


    };
  
  return (
   
    <>
    <section id="hero" style={myStyle} >
   
       <div className='row'>
<div className='col-lg-12'>
       
<span  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">New Inspiration 2020</span>
        <h1 className='MainHeaderH1'>CLOTHING MADE FOR YOU! </h1>
    
        <p data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Trending from men and women style collection</p>
     
     <button type="button" class="btn btn-danger MainPageButton">Shop Now <i class="fa-sharp fa-solid fa-cart-plus"></i></button>
      

</div>

        </div>
    </section>
    </>
  )
}

