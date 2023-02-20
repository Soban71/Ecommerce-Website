import React from 'react'

export default function Deals() {
    var Deal1={
        backgroundImage: 
        "url('./images/BannerImages/banner1.jpg')",
    }
    var Deal2={
        backgroundImage: 
        "url('./images/BannerImages/banner2.jpg')", 
    }
    var Deal3={
        backgroundImage: 
        "url('./images/BannerImages/banner3.jpg')", 
    }
    var Deal4={
        backgroundImage: 
        "url('./images/BannerImages/banner4.jpg')", 
    }
    var Deal5={
        backgroundImage: 
        "url('./images/BannerImages/banner5.jpg')", 
    }
  return (
    <div>
      <section id="Banner" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
<div className="row">
    <div className="col-lg-6 ">
        <div className="banner1 bannerbox" style={Deal1}>
        <h4>Crazy deals</h4>
        <h2>Buy 1 get 1 free</h2>
        <p>The Best classNamees dress is Sale on Sj</p>
        <button className="bannerbtn">Learn More</button>
    </div>
    </div>

    <div className="col-lg-6 ">
        <div className="banner2 bannerbox" style={Deal2}>
        <h4>Winter/Spring</h4>
        <h2>Upcoming Season</h2>
        <p>The Best classNamees dress is Sale on Sj</p>
        <button className="bannerbtn">Collection</button>
    </div>
    </div>

</div>


<div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="banner3 bannerbox" style={Deal3}>
            <h2>Seasonal Sale</h2>
            <h3>Summer Collection -50% Off</h3>
        </div>
    </div>


    <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="banner4 bannerbox" style={Deal4}>
            <h2>New Footwear Collection</h2>
            <h3>Spring/Winter 2022</h3>
        </div>
</div>

        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="banner5 bannerbox" style={Deal5}>
                <h2>T-SHIRTS</h2>
                <h3>New Trendy Prints</h3>
            </div>
            </div>

</div>
</section>
    </div>
  )
}
