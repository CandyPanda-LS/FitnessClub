import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AddRequirementsToTheInstructor.css";

import Background from "./img/gymbannner.jpg";

const AddRequirementsToTheInstructor = () => {
  const [instructorID, setInstructorID] = useState();
  const [profileID, setProfileID] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [requirement, setRequirement] = useState();

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios.get("http://localhost:5000/api/profile/me", config).then((res) => {
      console.log(res.data._id);
      console.log(res.data.instructor);
      setProfileID(res.data._id);
      setInstructorID(res.data.instructor);
    });
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const newUserRequest = {
      instructorID,
      profileID,
      weight,
      height,
      gender,
      requirement,
    };

    axios
      .post(
        "http://localhost:5000/api/instructors/adduserrequests",
        newUserRequest
      )
      .then((res) => {
        alert("Request Success");
      })
      .catch((err) => {
        alert(err);
      });
  }

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
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    {" "}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">Add Your Requirement</h4>
                    </div>
                    <form class="user" onSubmit={submitHandler}>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="number"
                          placeholder="Enter Weight..."
                          name="Weight"
                          onChange={(e) => {
                            setWeight(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="number"
                          placeholder="Enter Height..."
                          name="Height"
                          onChange={(e) => {
                            setHeight(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <select
                          class="form-control"
                          style={{ borderRadius: "20px" }}
                          id="exampleInputEmail"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        >
                          <option class="form-control form-control-user">
                            Male
                          </option>
                          <option class="form-control form-control-user">
                            Female
                          </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control form-control-user"
                          type="text"
                          style={{ borderRadius: "20px" }}
                          placeholder="Enter Your Requirement..."
                          name="Requirement"
                          onChange={(e) => {
                            setRequirement(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <button
                          class="btn btn-primary btn-block text-white btn-user"
                          type="submit"
                        >
                          Request
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
};

export default AddRequirementsToTheInstructor;
