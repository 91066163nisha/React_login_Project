import React from "react";
import Header from "./Header.js";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
