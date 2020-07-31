import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "./image/1.jpg";

export default class UserLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{
                        // border: "2px solid blue",
                        backgroundImage: `url(${Background})`,
                        backgroundRepeat:
                          "no-repeat" /* Do not repeat the image*/,
                        backgroundSize: "cover",
                        boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                for="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-block text-white btn-user"
                          type="submit"
                        >
                          Login
                        </button>
                        <hr />
                        <Link
                          className="btn btn-primary btn-block text-white btn-google btn-user"
                          role="button"
                        >
                          <i className="fab fa-google"></i>&nbsp; Login with
                          Google
                        </Link>
                        <Link
                          className="btn btn-primary btn-block text-white btn-facebook btn-user"
                          role="button"
                        >
                          <i className="fab fa-facebook-f"></i>&nbsp; Login with
                          Facebook
                        </Link>
                        <hr />
                      </form>
                      <div className="text-center">
                        <Link className="small" to="forgot-password.html">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="register.html">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
