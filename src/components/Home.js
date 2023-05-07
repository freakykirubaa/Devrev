import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import books from '../assets/hand-drawn-flat-design-stack-books-illustration_23-2149341898-removebg-preview.png'
export default function Home(){
    useEffect(() => {
        AOS.init({
          duration: 2000, // Set the animation duration (in ms)
          easing: 'ease-in-out', // Set the animation easing
        });
      }, []);
    return(
        
        <section id="home" class="d-flex align-items-center section-bg">
        <div className="container mt-5">
          <div class="row justify-content-between gy-5 mt-3">
            <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-out" class="display-3" data-aos-delay="100" data-aos-duration="2000">Library Management<br/>System</h2>
              <p data-aos="fade-out" data-aos-delay="100" data-aos-duration="2000">It help libraries keep track of their documents inventory and loans, and member subscriptions and profiles, sometimes for multiple physical locations.</p>
              <button type="button" class="btn btn-dark" data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000">Manage</button>
            </div>
            <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img src={books} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
            </div>
          </div>
         
        </div>
      </section>

    )
}