import React,{useEffect} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'

export default function FeaturesArrival() {
    useEffect(()=>{
        aos.init({});
    })
  return (
   
    <>
       <section id="NewArrivals">
        <h2>Featured Product</h2>
        <p>Summer Collection New Modern Design</p>
     
        <div class="pro_Container"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
            <div class="pro" data-aos="fade-left" data-aos-offset="100" data-aos-delay="300" >
                <img src="images/Arrival1.jpg" alt=""/>
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$43</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>



            <div class="pro" data-aos="fade-right" data-aos-offset="100" data-aos-delay="300" >
                <img src="images/Arrival2.jpg" alt=""/>
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$53</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>



            <div class="pro" data-aos="fade-left" data-aos-offset="100" data-aos-delay="100">
                <img src="images/Arrival3.jpg" alt="" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$47</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>



            <div class="pro" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
                <img src="images/Arrival4.jpg" alt="" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$29</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>




            <div class="pro" data-aos="fade-left" data-aos-offset="100" data-aos-delay="100">
                <img src="images/Arrival5.jpg" alt=""/>
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$39</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>




            <div class="pro" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                <img src="images/Arrival6.jpg" alt="" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$33</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>



            <div class="pro" data-aos="fade-left" data-aos-offset="100" data-aos-delay="100">
                <img src="images/Arrival7.jpg" alt="" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$35</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>



            <div class="pro" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                <img src="images/Arrival8.jpg" alt="" />
                <div class="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut Shirt</h5>
                    <div class="star">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                    </div>
<h4>$28</h4>
                </div>
                <i class="add-carts fa-sharp fa-solid fa-cart-shopping carts" id="cart"></i>

            </div>

        </div>

    </section>

    </>
  )
}
