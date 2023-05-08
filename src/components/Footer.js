
import React from 'react';
export default function Footer()
{
    return(
        <footer class="container-fluid bg-dark text-light p-3">
        <div class="row">
          <div class="col-md-3">
            <h4>Useful Links</h4>
           <ul class="list-unstyled">
            <a href="#">
            <li>Home</li></a>
            <a href='#about'>
            <li>About us</li></a>
            <a href="#features"><li>Features</li></a>
           <a href="#products"><li>Books</li></a>
            <a href="#contact"><li>Contact us</li></a>
           </ul>
          </div>
          <div class="col-md-3">
            <h4>Contact Us</h4>
            <ul class="list-unstyled">
              <li>Phone:+91 7648964359</li>
              <li>Email: devrev@gmail.com</li>
              <li>Address: MG Road,Bangalore</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Locations</h4>
            <ul class="list-unstyled">
              <li>Chennai</li>
              <li>Coimbatore</li>
              <li>Bangalore</li>
              <li>Cochin</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Follow Us</h4>
            <ul class="list-unstyled">
              <li><a href="#"><i class="fab fa-facebook fa-lg"></i> Facebook</a></li>
              <li><a href="#"><i class="fab fa-twitter fa-lg"></i> Twitter</a></li>
              <li><a href="#"><i class="fab fa-instagram fa-lg"></i> Instagram</a></li>
              <li><a href="#"><i class="fab fa-linkedin fa-lg"></i>Linked-in</a></li>
            </ul>
          </div>
        </div>
      </footer>
      

    )
}