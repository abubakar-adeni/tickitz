import React, { useState, useEffect } from "react";
import styles from '../styles/Test.module.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {
  const navigate = useNavigate()
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone_number, setPhone_Number] = React.useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
  const handleRegistration = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users`, {
        email: email,
        fullname: fullName,
        password: password,
        phone_number: phone_number,
      })
      .then((response) => {
        Swal.fire({
          title: "Registration Success!",
          text: "Registration Success! Please Login",
          icon: "success",
        }).then(() => {
          navigate("/login")
        })
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message ?? "Something wrong in our App!",
          icon: "error",
        })
      })
  }


  return (
    <div>
      <div className={`row g-0`}>
        <div className={`col-6  vh-100 d-flex justify-content-center align-items-center ${styles.left} `}>
          <img style={{ boxSizing: "border-box" }} className={`${styles.logo} `} src={require("../assets/Tickitz2.png")} alt="img-logo" />
        </div>
        <div className={`col-md-5 col-xs-10 ${styles.right} d-flex flex-column justify-content-center `}>
          <div className={`${styles.container}`}>
            <h1 className={`text-center ${styles.Title} mt-3`}>Let's Get Started!</h1>
            <p className={`text-center ${styles.Text}`}>
              Create a new account to access all features
            </p>
            <div className="row justify-content-center">
              <div className="col col-9">
                <form onSubmit={(event) => {
                  event.preventDefault();
                }}>
                  <div className="mb-3">
                    <label className={`form-label ${styles.Text}`}>
                      Name
                    </label>
                    <input
                      type="name"
                      className="form-control form-control-sm"
                      id="name"
                      name="name"
                      placeholder="name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className={`form-label ${styles.Text}`}>
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
                    <label className={`form-label ${styles.Text}`}>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="08xxxxxxxxxx"
                      onChange={(e) => setPhone_Number(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className={`form-label ${styles.Text}`}>
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
                      onClick={handleRegistration}
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-end fs-6 fw-medium mt-3"></p>
                </form>
              </div>
            </div>
            <p className="text-center mt-2" style={{ color: "#5F2EEA" }}>
              Already have an account? {' '}
              <Link to='/login' className={`text-decoration-none ${styles.Login}`}>Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
