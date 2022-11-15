import React from 'react'
import './Footer.scss';




const Footer = () => {
  return (
  
    <footer>
<div class="top_header">
<section>
<span><i class="fa fa-map-marker"></i></span>

<span>BARRIO DE LAS ARTES, C. Vendeja, 7, 29001 Málaga</span>

</section>
<section>
<span><i class="fa fa-phone"></i></span>
<span>(34)608 40 25 10</span>
</section>
<section>
<span><i class="fa fa-envelope"></i></span>
<span>vivianacalvatattoo@websitename.com</span>
</section>
</div>
<span class="border-shape"></span>
<div class="bottom_content">
<section className='icons'>
<a href="https://es-la.facebook.com/sohotattoomalaga/"><i class="fa fa-facebook"></i></a>
<a href="https://www.instagram.com/sohotattoomalaga/?hl=es"><i class="fa fa-instagram"></i></a>
</section>
{/* <section className='afooter'>
<a href="a1">Home</a>
<a href="a2">About us</a>
<a href="a3">Order</a>
<a href="a4">Retail</a>
<a href="a5">Member</a>
<a href="a6">Contact Us</a>
</section> */}
</div>
<div class="copyright">
Copyright Esther Vazquez © 2022 to Málaga with 🤍 - All rights reserved 
</div>
</footer>
    
    
  )
}

export default Footer