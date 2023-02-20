import React from 'react';

export default function ContactInformation() {
  return (
    <>
    <section id="contact-detail">
<div className="row">
<div className="col-lg-6 col-md-6">
<div className="detail">
    <span>GET IN TOUCH</span>
    <h2>Visit one of our agency location or contact us today</h2>
    <h3>Head Office</h3>
    <ul>
        <li><i className="fa-solid fa-location-dot"></i>    Malikbad Plaza 302 Shop Commerical Market Rawalpindi</li>
        <li><i className="fa-solid fa-envelope"></i>    janjuasoban71@gmail.com</li>
        <li><i className="fa-solid fa-phone"></i>  03350587032</li>
        <li><i className="far fa-clock"></i> Monday to Saturday 9:00 am to 10:00 pm</li>
    </ul>
</div>
</div>
<div class="col-lg-6 col-md-6">
    <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.9581133351417!2d73.24086971466893!3d34.
198546617454504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de304446d9297f%3A0xe744bea4e9033b92!2s
COMSATS%20University%20Islamabad%20-%20Abbottabad%20Campus!5e0!3m2!1sen!2s!4v1669887782320!5m2!1sen!2s"
 />
</div>
</div>
</div>
    </section>
    <section id="SendingDetail">
<div class="row">
    <div class="col-lg-8 col-md-6">
<span>LEAVE A MESSAGE</span>
<h2>We love to hear from you</h2>
<input type="text" name="" id="" placeholder="Your Name"/>
<input type="email" name="" id="" placeholder="E-mail"/>
<input type="text" placeholder="Subject"/>
<textarea name="" id="" cols="30" rows="8" placeholder="Your Message"></textarea><br/>
<button class="normal">Submit</button> 
    </div>


    <div class="col-lg-4 col-md-6">
        <div class="ContactPeoples">
            <img src="/images/people/1.png" alt=""/>
            <p><span>Muhammad Soban</span><br/> Manager <br/>Phone +923350587032 <br/> E-mail janjuasoban71@gmail.com</p>
        </div>

        <div class="ContactPeoples">
            <img src="/images/people/2.png" alt=""/>
            <p><span>Mubasher Rasheed</span><br/> Supervisor <br/>Phone +923345678991 <br/> E-mail Mubashirraja91@gmail.com</p>
        </div>

        <div class="ContactPeoples">
            <img src="/images/people/3.png" alt=""/>
            <p><span>Huma khan</span><br/> Manager <br/>Phone +923343219876 <br/> E-mail AliamUmtaz23@gmail.com</p>
        </div>

    </div>
</div>
    </section>

    </>
  )
}
