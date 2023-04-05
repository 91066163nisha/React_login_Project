import React from "react";
import Header from "./Header.js";
export default function LoginLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
