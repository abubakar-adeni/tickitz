import React, { useState, useEffect } from "react";
import styles from '../styles/Test.module.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAuth } from "../reducers/auth";
import Loader from "../components/loader";
import Swal from "sweetalert2";
import axios from "axios";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  

  // const [isResponsive, setIsResponsive] = useState(
  //   window.innerWidth >= 375 && window.innerWidth <= 768
  // );

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsResponsive(window.innerWidth >= 375 && window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.token
        const user_id = response?.data?.data?.id

        Swal.fire({
          title: "Login Success",
          text: "Login Success, redirect to app...",
          icon: "success",
        }).then(() => {
          localStorage.setItem("auth", "true")
          localStorage.setItem("token", token)
          localStorage.setItem("user_id", user_id)
          window.location.href = "/"
        })
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error?.response?.data?.message ?? "Something wrong in our app",
          icon: "error",
        })
      })
  }

  return (
    <div>
      <div className={`row g-0`}>
        <div className={`col-6  vh-100 d-flex justify-content-center align-items-center ${styles.left} `}>
          <img style={{ boxSizing: "border-box"}} className={`${styles.logo} `} src={require("../assets/Tickitz2.png")} alt="img-logo" />
        </div>
        <div className={`col-md-5 col-xs-10 ${styles.right} d-flex flex-column justify-content-center `}>
          <div className="container">
            <h1 className={`text-center ${styles.Title} mt-3`}>Welcome</h1>
            <p className={`text-center ${styles.Text}`}>
              Log in into your existing account
            </p>
            <div className="row justify-content-center">
              <div className="col col-9">
                <form
                 onSubmit={(event) => {
                  event.preventDefault();
                }}>
                  <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${styles.Text}`}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className={`form-label ${styles.Text}`}>
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-sm"
                        id="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className={`btn btn-outline-primary ${styles.Eye}`}
                        type="button"
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className={`d-grid`}>
                    <button
                      // style={{backgroundColor: '#5F2EEA'}}
                      type="submit"
                      className={`btn btn-primary ${styles.button} mt-3`}
                      onClick={handleLogin}
                    >
                       {isLoading ? <Loader text="Logging in..."/> : <span>Log in</span>}
                    </button>
                  </div>
                  <p className="text-end fs-6 fw-medium mt-3"></p>
                </form>
              </div>
            </div>
            <p className="text-center mt-2" style={{ color: "#5F2EEA"}}>
              Don't have an account? {' '}
              <Link to='/register' className={`text-decoration-none ${styles.Login}`}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
