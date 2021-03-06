import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../../../firebase";
import "./createadvertisement.css";

import Background from "./image/gymbanner.jpg";

import Progress from "./Progress";

export default function Createadvertiesement() {
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);

  useEffect(() => {
    //if there is no admin navigate to the login page
    const token = localStorage.getItem("x-auth-token");
    const userRole = localStorage.getItem("userRole");

    if (!token) {
      window.location = "/userlogin";
    }

    if (userRole !== "admin") {
      window.location = "/userlogin";
    }
  }, []);

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

    const formData = {
      title: Title,
      description: Description,
      advertiesementImage: imageURL,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/advertisement", formData)
      .then((res) => {
        window.location = "/advertisementtable";
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function uploadImage(e) {
    e.preventDefault();

    if (file !== null) {
      const uploadTask = storage.ref(`advertisements/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setuploadPercentage(progress);
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("advertisements")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setImageURL(url);
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
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
                  <form class="user">
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
                      <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                        Image
                      </label>

                      {imageURL ? <img src={imageURL} width="300px" /> : ""}
                      <div className="row">
                        <div className="col-md-9">
                          <input
                            class="form-control "
                            type="file"
                            id="exampleInputEmail"
                            name="Image"
                            style={{ padding: "2px" }}
                            onChange={(e) => {
                              setFile(e.target.files[0]);
                            }}
                          />
                        </div>
                        <div className="col-md-3">
                          <i
                            style={{ fontSize: "43px" }}
                            class="fas fa-cloud-upload-alt ImageUploadButton"
                            onClick={uploadImage}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <Progress percentage={uploadPercentage} />
                    <br />
                    <button
                      class="CreateBTN btn btn-primary btn-block text-white btn-user"
                      id="signup"
                      name="signup"
                      onClick={onFormSubmit}
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
