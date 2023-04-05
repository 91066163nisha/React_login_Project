import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Protected(props) {

  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("items3")) {
      navigate("/Login");
    }
  }, []);
  return <Component />;
}
