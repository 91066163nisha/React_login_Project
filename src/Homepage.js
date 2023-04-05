import React from "react";
import Layout from "./layout";
import Heroimage from "./images/heroimage.svg";
import "./Homepage.css";

export default function Homepage() {
  return (
    <Layout>
      <section className="homepage-hero padding-top-btm">
        <div className="container">
          <div className="row featurette justify-content-between align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
              <div className="position">
                <h1 className="featurette-heading hed-font-weight">
                  Discover the
                  <span className="orange-color">Perfect Name</span>
                  that sets you apart
                </h1>
              </div>
              <p className="home-text">
                A Name creates a story that connects with human culture. You are
                one step away to elevate your brand with a creative and unique
                name.
              </p>
              <div className="search-btn col-11 d-flex align-items-center">
                <input
                  type="search"
                  className="search-home"
                  placeholder="Enter category, word etc."
                />
                <button className="home-btn col-4">Generate Names</button>
              </div>
              <div className="home-banner-text">
                Already have a name you want to test?
                <span className="orange-color">Take name test</span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 extra-img-padding-left">
              <img
                src={Heroimage}
                alt="2"
                className="home-page-img img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
