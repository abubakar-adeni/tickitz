import React, { useEffect } from "react"
import '../styles/Auth.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"

function Test() {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);



  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="row g-0">
        <div className="col-6 left vh-100 d-flex justify-content-center align-items-center">
          <img className="logo" src={require("../assets/Tickitz2.png")} alt="img-logo" />
        </div>
        <div className="col-md-5 col-xs-10 right d-flex flex-column justify-content-center">
          <div className="container">
            <h1 className="text-center Title mt-3">Welcome</h1>
            <p className="text-center text-secondary Text">
              Log in into your existing account
            </p>
            <div className="row justify-content-center">
              <div className="col col-9">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="E-mail"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="off"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                    className="btn btn-outline-warning"
                    type="button"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-warning mt-3"
                    >
                    </button>
                  </div>
                  <p className="text-end fs-6 fw-medium mt-3">
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center mt-2" style={{ color: "#5F2EEA"}}>
              Don't have an account?
              <button className="text-decoration-none" type="submit" 
              style={{ color: "#5F2EEA", fontWeight: "bold" }}>Register</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;