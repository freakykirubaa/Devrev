import React from 'react';

export default function About()
{
    return(
<section class="container my-5" id="about">
        <div class="row">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <h2>About Our Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus dapibus velit, sit amet consequat eros molestie eget. Nulla nec eros vestibulum, ultricies nulla a, vehicula elit.</p>
            
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </p>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <img src="https://images.unsplash.com/photo-1477067197155-830d283b19b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="Company Image" class="img-fluid"/>
          </div>
        </div>
      </section>

    )
}