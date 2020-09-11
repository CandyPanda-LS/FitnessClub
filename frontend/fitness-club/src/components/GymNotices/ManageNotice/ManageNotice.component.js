import React, { Component } from "react";
import axios from "axios";
import "./ManageNotice.css";

import Background from "./img/gymbanner2.jpg";

export default class UpdateNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeTitle: "",
      noticeDescription: "",
      date: "",
      updateMode: "Insert",
    };
  }
  componentDidMount() {
    const noticeId = this.props.location.data;
    if (noticeId !== undefined) {
      this.setState({
        updateMode: "Update",
      });
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      };

      axios
        .get("http://localhost:5000/api/notices/" + noticeId, config)
        .then(({ data }) => {
          this.setState({
            noticeTitle: data.NoticeTitle,
            noticeDescription: data.NoticeDescriprion,
            date: data.Date.substring(0, 10),
          });
          console.log(this.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  onNoticeTitleChange(e) {
    this.setState({
      noticeTitle: e,
    });
  }
  onNoticeDesChange(e) {
    this.setState({
      noticeDescription: e,
    });
  }
  onNoticeDateChange(e) {
    this.setState({
      date: e,
    });
  }

  submitNotice(e) {
    const noticeId = this.props.location.data;
    const noticeDetails = {
      NoticeTitle: this.state.noticeTitle,
      NoticeDescriprion: this.state.noticeDescription,
      Date: this.state.date,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (this.state.updateMode === "Update") {
      try {
        axios
          .put(
            "http://localhost:5000/api/notices/" + noticeId,
            noticeDetails,
            config
          )
          .then((res) => {
            alert("successed");
            console.log(this.state);
            window.location = "/NoticesTable";
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        axios
          .post("http://localhost:5000/api/notices/", noticeDetails, config)
          .then((res) => {
            alert("successed");
            window.location = "/NoticesTable";
          });
      } catch (err) {
        console.log(err);
      }
    }
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
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h4 class="text-dark mb-4">
                          {this.state.updateMode} | Notice
                        </h4>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Notice Title..."
                            name="title"
                            value={this.state.noticeTitle}
                            onChange={(e) =>
                              this.onNoticeTitleChange(e.target.value)
                            }
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            placeholder="Enter Notice Description..."
                            name="description"
                            value={this.state.noticeDescription}
                            onChange={(e) =>
                              this.onNoticeDesChange(e.target.value)
                            }
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <label
                            style={{ fontSize: "12px", marginLeft: "15px" }}
                          >
                            Date
                          </label>
                          <input
                            class="form-control form-control-user"
                            type="date"
                            style={{ borderRadius: "20px" }}
                            placeholder="Enter Date..."
                            name="date"
                            value={this.state.date}
                            onChange={(e) =>
                              this.onNoticeDateChange(e.target.value)
                            }
                          />
                        </div>

                        <div class="form-group">
                          <button
                            class="btn btn-primary btn-block text-white btn-user additemBtn"
                            type="button"
                            onClick={(e) => this.submitNotice(e.target.value)}
                          >
                            {this.state.updateMode} Notice
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
