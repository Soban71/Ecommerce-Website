import React from 'react'

export default function Footer() {
  return (
    <div>
      <section class="footer">
<div class="row">
 <div class="col-lg-4" data-aos="fade-left" data-aos-offset="100" data-aos-delay="200">
<h1>Subscribe our newsletter</h1>
<p>We are team of non-cynics who truly care about our work</p>
 </div>
 <div class="col-lg-8">
	<input type="text"  placeholder="Search Here..." />
	<button className='SearchButton'><i class="fa fa-search" aria-hidden="true"></i></button>
 </div>
</div>

<div class="row" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<div class="col-lg-3 col-md-4">
<h1>Information</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut nisi nostrum laboriosam qui numquam.</p>
<div class="row">
	<div class="col-lg-3">
		<i class="fa fa-facebook-square fa-2x fb"aria-hidden="true"></i>
	</div>
	
	<div class="col-lg-3">
		<i class="fa fa-twitter-square fa-2x twt"aria-hidden="true"></i>
	</div>
	
<div class="col-lg-3">
	<i class="fa fa-whatsapp fa-2x whtap" aria-hidden="true"></i>
</div>

<div class="col-lg-3">
	<i class="fa fa-instagram fa-2x insta" aria-hidden="true"></i>
</div>
</div>
</div>
<div class="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Useful</h1>
<li>About us</li>
<li>Gallery</li>
<li>Blog post</li>
<li>Pricing plan</li>
</div>
<div class="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Details</h1>
<li>Photographer</li>
<li>Gallery</li>
<li>About</li>
<li>Pricing plan</li>
</div>
<div class="col-lg-3 col-md-4 liFooter" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200">
<h1>Help and Support</h1>
<li>Privacy</li>
<li>Terms and conditions</li>
<li>Technical support</li>
<li>Customer Care</li>
</div>
</div>
</section>


    </div>
  )
}
