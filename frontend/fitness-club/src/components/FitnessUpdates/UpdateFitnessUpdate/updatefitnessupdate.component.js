import React, { Component } from "react";
import axios from "axios";

import "./updatefitnessupdate.css";

import Background from "./img/fitnessupdate.jpg";

export default class updateFitnessUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      topic: "",
      description: "",
      link: "",
      image: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/api/fitnessUpdate/" + this.props.match.params.id
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data._id,
          topic: res.data.topic,
          description: res.data.description,
          link: res.data.link,
          image: res.data.image,
          file: null,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

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
                            value={this.state.topic}
                            onChange={(e) => {
                              this.setState({
                                topic: e.target.value,
                              });
                            }}
                            name="Topic"
                          />
                        </div>

                        <div class="form-group">
                          <textarea
                            class="form-control form-control-user"
                            type="text"
                            style={{ borderRadius: "20px" }}
                            value={this.state.description}
                            onChange={(e) => {
                              this.setState({
                                description: e.target.description,
                              });
                            }}
                            name="Description"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            value={this.state.link}
                            onChange={(e) => {
                              this.setState({
                                link: e.target.link,
                              });
                            }}
                            name="Link"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            style={{ padding: "2px" }}
                            class="form-control form-control-user"
                            type="file"
                            id="exampleInputEmail"
                            onChange={(e) => {
                              this.setState({
                                file: e.target.files[0],
                              });
                            }}
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
