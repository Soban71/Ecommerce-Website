import React from 'react'

export default function AboutInformation() {
  return (
    <>
      <section id="about-head">
    <div className="row">
<div className="col-lg-6 col-md-6">
<div className="image">
    <img src="/images/Aboutus/Image1.jpg" alt="" />
</div>
</div>
<div className="col-lg-6 col-md-6">
    <div className="abouthead-detail">
        <h2>Who We Are?</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet natus nesciunt amet fuga unde omnis quos 
            incidunt magnam optio cumque, alias vitae placeat 
            repudiandae ratione suscipit accusamus, hic itaque magni. Eius, officiis quasi vel placeat vitae ipsam ducimus? 
            Quam.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum aspernatur sapiente 
        </p>
    </div>
    </div>
    </div>
</section>

<section id="Appdetail">
<div className="row">
<div className="col-lg-12 col-md-12">
<h1>Download Our App</h1>
<hr className="line" />
<div className="Appvideo">
    <video autoplay muted src="/images/Aboutus/Aboutusvideo.mp4"></video>

</div>
</div>
</div>
</section>


    <section id="features">
<div className="row">
    <div className="col-lg-2 col-md-4 col-sm-6">
<div className="cards">
        <img src="/images/freeshiping.png" alt="reload" />
        <h6>Free Shipping</h6>
    </div>    
    </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="cards">
                    <img src="/images/SaveMoney.png" alt="reload" />
                    
                    <h6>Save Money</h6>
                
                </div>
                            </div>

                            
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="cards">
                    <img src="/images/promotions.png" alt="reload" />
                    <h6>Promotions</h6>
                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="cards">
                                <img src="/images/Online order.png" alt="reload" />
                                <h6>Online order</h6>
                            </div>
                                        </div>
                   
                                        <div className="col-lg-2 col-md-4 col-sm-6">
                                            <div className="cards">
                                            <img src="/images/support247.png" alt="reload" />
                                            <h6>24/7 Supports</h6>
                                        </div>
                                                    </div>


                                       <div className="col-lg-2 col-md-4 col-sm-6">
                                            <div className="cards">
                                            <img src="/images/happysell.png" alt="reload" />
                                            <h6>Happy Sell</h6>
                                        </div>
                                                    </div>


</div>
    </section>
    </>
  )
}
