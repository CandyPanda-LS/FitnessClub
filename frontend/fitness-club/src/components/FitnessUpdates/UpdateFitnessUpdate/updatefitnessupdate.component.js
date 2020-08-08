import React, { Component } from "react";

import "./updatefitnessupdate.css";

import Background from "./img/fitnessupdate.jpg";

export default class updateFitnessUpdate extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-12 col-xl-10">
            <div
              class="card  o-hidden border-0 my-5"
              style={{
                // border: "2px solid blue",
                borderRadius: "20px",
                boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
              }}
            >
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-flex">
                    <div
                      class="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: `url(${Background})`,
                        backgroundRepeat:
                          "no-repeat" /* Do not repeat the image */,
                        backgroundSize: "cover",
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h4 class="text-dark mb-4">Update | Fitness Update</h4>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Topic..."
                            name="Topic"
                          />
                        </div>

                        <div class="form-group">
                          <textarea
                            class="form-control form-control-user"
                            type="text"
                            style={{ borderRadius: "20px" }}
                            placeholder="Enter  Description..."
                            name="Description"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Link..."
                            name="Link"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            style={{ padding: "2px" }}
                            class="form-control form-control-user"
                            type="file"
                            id="exampleInputEmail"
                            placeholder="Enter Link..."
                            name="image"
                          />
                        </div>

                        <div class="form-group">
                          <button
                            class="btn btn-primary btn-block text-white btn-user"
                            type="submit"
                          >
                            Add Post
                          </button>
                        </div>
                      </form>
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
