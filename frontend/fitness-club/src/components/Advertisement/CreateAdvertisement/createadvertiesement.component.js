import React, { useState } from "react";
import axios from "axios";

import "./createadvertisement.css";

import Background from "./image/gymbanner.jpg";

import Progress from "./Progress";

export default function Createadvertiesement() {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);

  function onChangeFile(e) {
    setFile(e.target.files[0]);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (Title == null) {
      alert("Title is required");
      return false;
    }
    if (Description == null) {
      alert("Description is required");
      return false;
    }
    if (file == null) {
      alert("Image is required");
      return false;
    }

    const formData = new FormData();

    formData.append("title", Title);
    formData.append("description", Description);
    formData.append("file", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        //'x-auth-token': localStorage.getItem('x-auth-token'),
      },
      onUploadProgress: (progressEvent) => {
        setuploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        );
        //Clear percentage
        setTimeout(() => setuploadPercentage(0), 10000);
      },
    };

    axios
      .post("http://localhost:5000/api/advertisement", formData, config)
      .then((res) => {
        window.location = "/advertisementtable";
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

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
                  }}
                ></div>{" "}
              </div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <h4 class="text-dark mb-4">Create an Advertisement</h4>
                  </div>
                  <form class="user" onSubmit={onFormSubmit}>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          style={{ borderRadius: "10px" }}
                          class="form-control form-control-user"
                          type="text"
                          id="title"
                          placeholder="Title"
                          name="title"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-6">
                        <textarea
                          style={{ borderRadius: "10px" }}
                          class="form-control form-control-user"
                          type="text"
                          id="description"
                          placeholder="Description"
                          name="description"
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          style={{ padding: "3px", borderRadius: "10px" }}
                          class="choosebtn form-control form-control-user"
                          type="file"
                          id="ItemImage"
                          placeholder="{filename}"
                          name="image"
                          onChange={onChangeFile}
                        />
                      </div>
                    </div>
                    <Progress percentage={uploadPercentage} />
                    <br />
                    <button
                      class="CreateBTN btn btn-primary btn-block text-white btn-user"
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
