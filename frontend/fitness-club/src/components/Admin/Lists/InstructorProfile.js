import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pic1 from "../Images/no_pic.jpg";
import "../assets/css/styles.css";
import Moment from "moment";
import { Button } from "@material-ui/core";

export default class InstructorProfile extends Component {
  constructor(props) {
    super(props);

    this.generatePDF = this.generatePDF.bind(this);

    this.state = {
      instructorId: "",
      name: "",
      dob: Moment(new Date()).format("DD-MM-YYYY"),
      gender: "Male",
      address: "",
      phone: null,
      email: "",
      password: "",
      instructors: [],
      userRequests: [],
    };
  }

  componentDidMount() {
    if (!this.props.location.data) {
      window.location = "/list";
    }

    axios
      .get("http://localhost:5000/api/instructors/" + this.props.location.data)
      .then((response) => {
        this.setState({
          instructorId: response.data.instructorID,
          name: response.data.name,
          dob: Moment(response.data.dob).format("DD-MM-YYYY"),
          gender: response.data.gender,
          address: response.data.address,
          phone: response.data.phone,
          email: response.data.email,
          password: response.data.password,
        });

        console.log("userRequests : " + response.data.userRequests);
        console.log(response.data.userRequests.length);

        if (response.data.userRequests.length > 0) {
          this.setState({ userRequests: response.data.userRequests });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  generatePDF() {
    const pdfText = {
      userRequests: this.state.userRequests,
    };

    axios
      .post(
        "http://localhost:5000/api/pdfgenerate/generateuserrequests",
        pdfText
      )
      .then(() => {
        alert("PDF Generated Successful");
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src={Pic1} alt="" style={{ height: "170px" }} />
                  <div class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{this.state.name}</h5>
                  <h6>Gym Instructor</h6>
                  <p class="proile-rating">
                    RATING : <span>8/10</span>
                  </p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <button className="btn btn-primary" onClick={this.generatePDF}>
                  Generate PDF
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Instructor Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.instructorId}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>DOB</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.dob}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div class="col-md-6">
                        <p>Gym Instructor</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.phone}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
