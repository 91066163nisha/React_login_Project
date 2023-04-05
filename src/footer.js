import "./footer.css";
import "./bootstrap.bundle.min.js";
import "./bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import footlogo from "./images/footer_logo.png";
import gpaly from "./images/gplay.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/insta.svg";
import twitter from "./images/footTwiter.svg";
import pinterest from "./images/footerPint.svg";
import youtube from "./images/footYoutube.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_small_container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <div className="footer_subtit">BrandBoy</div>
              <div className="footer_nav">
                <ul>
                  <li>
                    <a href="homepage.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">My Collection</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  assets/images/footer-img/Instagram.svg
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="footer_subtit">Services</div>
              <div className="footer_nav">
                <ul>
                  <li>
                    <a href="#">Contests</a>
                  </li>
                  <li>
                    <a href="#">Name Generator</a>
                  </li>
                  <li>
                    <a href="#">Name Test</a>
                  </li>
                  <li>
                    <a href="#">Slogan Generator</a>
                  </li>
                  <li>
                    <a href="#">Premium Domains</a>
                  </li>
                  <li>
                    <a href="#">Hire Agency</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="footer_subtit">Contests</div>
              <div className="footer_nav">
                <ul>
                  <li>
                    <a href="#">Name Contest</a>
                  </li>
                  <li>
                    <a href="#">Slogan Contest</a>
                  </li>
                  <li>
                    <a href="#">Logo Contest</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="footer_subtit">Join us</div>
              <div className="footer_nav">
                <ul>
                  <li>
                    <a href="#">Sign up as Namer</a>
                  </li>
                  <li>
                    <a href="#">FAQs for Namers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_big_container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="footer_logo">
              <a href="homepage.html">
                <img src={footlogo} alt="BrandBoy-logo" />
              </a>
            </div>
            <div className="last_nav">
              <ul>
                <li>
                  <a href="#">All Rights Reserved © 2022 Burban Media</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="social_icn">
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={pinterest} alt="Pinterest" />
              </a>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="#">
                <img src={gpaly} alt="Google-playstore" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}
