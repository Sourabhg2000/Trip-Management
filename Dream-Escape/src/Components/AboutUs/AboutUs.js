import React from 'react'
import about from '../../Assets/Images/about-img.png'
import "../AboutUs/About.css"
const AboutUs = () => {
    return (
        <div>
            {/* <!-- About Start --> */}
    <section class="about" id="about">
      <div class="container pb-5">

        <div class="main-txt text-center p-5">
          <h1>About <span>Us</span></h1>
        </div>

        <div class="row" >

          <div class="col-md-6 py-3 py-md-0">
            <div class="card">
              <img src={about} alt=""/>
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">
            <h2>How Travel Agency Work</h2>
            <p>At Dream Escape, we understand that travel is not just about reaching a destination; it's about the moments that unfold along the way. Our team of dedicated travel enthusiasts is committed to creating personalized adventures that cater to every wanderer's dreams. Whether you seek the thrill of exploring hidden gems, cultural immersion, or simply unwinding in breathtaking landscapes, we have the perfect itinerary for you.

What sets us apart is our unwavering commitment to quality, authenticity, and customer satisfaction. From meticulously planned itineraries to handpicked accommodations, we ensure that every aspect of your journey exceeds expectations. Our goal is to make travel effortless, allowing you to focus on creating memories that last a lifetime.

Join us atDream Escape as we embark on a journey of discovery, embracing the beauty of diverse cultures, landscapes, and traditions. Let's turn your travel aspirations into a reality, one adventure at a time. Welcome to a world of endless possibilities and extraordinary experiences!</p>
            <button id="about-btn">Read More...</button>
          </div>

        </div>
        </div>
        </section>
        </div>
    
    )
}

export default AboutUs
