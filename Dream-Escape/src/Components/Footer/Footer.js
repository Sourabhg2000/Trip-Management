import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Dream<span>Escape</span>
          </h3>

          <p class="footer-links">
            <ul style={{ listStyleType: "none" }}>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/About_Us">
                  <a class="nav-link active" href="#">
                    About Us
                  </a>
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/Contact">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>
                </Link>{" "}
              </li>
            </ul>
          </p>

          <p class="footer-company-name">
            Copyright © 2024 <strong>DreamEscape</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <a href="https://maps.app.goo.gl/VK1XoMZ65e8RmT4S8">
              <i class="fa fa-map-marker"></i>
            </a>
            <span>Mayur Colony, Karve Road, Kothrud, Pune-411038</span>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+917987183837</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:abhidudhe2000@gmail.com">
                dream.escape@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            <strong>Dream Escape</strong> Nurtured from the seed of a single
            idea to empower the traveller with easy & instant travel bookings
            providing comprehensive choices, DreamEscape is a pioneer in India's
            online travel space. Founded in the year 2000, DreamEscape began its
            journey by serving the Indian travel market.
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
{
  /* <div className="Containner-fluid bg-dark">
<div className="text-primary text-center p-5">
  This app is designed and developed by:
  <strong>
    {" "}
    Shashwat Sharma, Sourabh Gaikwad, Lavanshu Deshmukh, Abhijeet Dudhe
  </strong>{" "}
  <sup>&copy;</sup>
</div>
</div> */
}
