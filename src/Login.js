import "./login.css";
import React, { useState, useEffect } from "react";
import "./bootstrap.bundle.min.js";
import "./bootstrap.min.css";
import LoginLayout from "./login_layout";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [emailerror, setemailerror] = useState(false);
  const [passerror, setpasserror] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("items3")) {
      navigate("/");
    }
  }, []);
  function loginHandler(e) {
    e.preventDefault();
    if (email.length < 10 || pass.length < 6) {
      alert("Please Enter Valid Detail");
    } else {
      alert("Log in Successful");
      let loginData = {
        email: email,
        password: pass,
      };
      localStorage.setItem("items3", JSON.stringify(loginData));
      navigate("/");
    }
  }

  function nameHandler(e) {
    let newEmail = e.target.value;
    if (!IsEmail(newEmail)) {
      console.log("Invalid email");
      setemailerror(true);
    } else {
      setemailerror(false);
      setemail(newEmail);
    }
  }
  function IsEmail(newaEmail) {
    var regex = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;
    return regex.test(newaEmail);
  }
  function passHandler(e) {
    console.log(e.target.value);
    let newpass = e.target.value;
    if (newpass.length < 6) {
      console.log("Invalid pass");
      setpasserror(true);
    } else {
      console.log("valid pass");
      setpasserror(false);
      setpass(newpass);
    }
  }

  return (
    <LoginLayout className="layout">
      <section className="login mx-3">
        <div className="container-login mt-5 mb-5 p-5">
          <div className="login-title">
            <h2 className="login-header">Log in</h2>
            <p className="text-login border-bottom pb-3">
              All the services to start your business in a single place!
            </p>
          </div>

          <div className="col-12">
            <form onSubmit={loginHandler}>
              <div className="col-md-10 mx-auto">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  onChange={nameHandler}
                  className="form-control border-clr mb-4 p-3"
                  id="email"
                  placeholder="example@mail.com"
                />
                {emailerror ? (
                  <span className="error">user not valid</span>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-10 mx-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={passHandler}
                  className="form-control border-clr p-3 s-pass"
                  id="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
                {passerror ? (
                  <span className="error">Password not valid</span>
                ) : (
                  ""
                )}
              </div>

              <div className="col-10 mx-auto text-center border-bottom pb-4 pt-4">
                <button
                  type="submit"
                  className="btn-orange px-4 pt-2 pb-2 reset-p"
                >
                  Log in
                </button>
              </div>

              <div className="text-center mt-3">
                <span className="text-muted size">
                  Don’t have an account ?
                  <a className="orange-color" href="#">
                    Create Account
                  </a>
                </span>
              </div>

              <div className="d-grid gap-2 col-md-6 mx-auto">
                <button
                  className="google-btn btn btn-outline-secondary p-2 mt-3"
                  type="button"
                >
                  <a className="google-link" href="#">
                    Continue with Google
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      ;
    </LoginLayout>
  );
}
