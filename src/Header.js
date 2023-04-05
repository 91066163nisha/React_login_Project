import React from "react";
import "./bootstrap.bundle.min.js";
import "./bootstrap.min.css";
import "./header.css";
import Bran_Logo from "./images/brand_logo.svg";
import star from "./images/brand_star.svg";
import icon from "./images/brand_contact.svg";

export default function Header() {
  return (
    <>
      <header className="header_container">
        <div className="d-flex justify-content-between align-items-center mob_block">
          <div className="logo w200 text-end">
            <a href="homepage.html">
              <img src={Bran_Logo} alt="BrandBoy-logo" />
            </a>
          </div>
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main_nav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          About Us
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Blogs
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Contact Us
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          My Account
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Generators
                    </a>
                    <ul className="dropdown-menu">
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Name Generator
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Slogan Generator
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Contests
                    </a>
                    <ul className="dropdown-menu">
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Hold Contest
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Recent Contests
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Recent Winners
                        </a>
                      </li>
                      <li className="drop-padding">
                        <a className="dropdown-item" href="#">
                          Join as Namer
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Name Test
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Premium Domains
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="right_icn w200 text-center ps-2">
            <a href="#" className="mr-2">
              <img src={star} alt="favourites" />
            </a>
            <a href="#">
              <img src={icon} alt="my-account" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
