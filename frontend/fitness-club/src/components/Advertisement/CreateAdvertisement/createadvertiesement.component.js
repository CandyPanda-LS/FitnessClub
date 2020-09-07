import React from "react";

import Background from "./image/gymbanner.jpg";

export default function createadvertiesement() {
  return (
    <div>
      <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-5 d-none d-lg-flex">
                <div
                  class="flex-grow-1 bg-login-image"
                  style={{
                    // border: "2px solid blue",
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat" /* Do not repeat the image*/,
                    backgroundSize: "cover",
                    boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
                    boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
                  }}
                ></div>{" "}
              </div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <h4 class="text-dark mb-4">Create an Advertisement</h4>
                  </div>
                  <form class="user">
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          class="form-control form-control-user"
                          type="text"
                          id="title"
                          placeholder="Title"
                          name="title"
                          required
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          class="form-control form-control-user"
                          type="text"
                          id="description"
                          placeholder="Description"
                          name="description"
                          required
                        />
                      </div>
                    </div>
                    <button
                      class="btn btn-primary btn-block text-white btn-user"
                      id="signup"
                      name="signup"
                      type="submit"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
