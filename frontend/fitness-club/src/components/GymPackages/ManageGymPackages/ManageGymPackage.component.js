/*
 *
 * @author nayana
 *
 */
import React, { Component } from "react";
import "./ManageGymPackage.css";
import axios from "axios";
import $ from "jquery";
export default class UpdateGymPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageName: "",
      packageDescription: "",
      packagePrice: "",
      imgPath: "",
      Img: "",
      editChanger: "",
      updateMode: "Insert",
    };
  }
  componentDidMount() {
    const packageId = this.props.location.data;
    if (packageId !== undefined) {
      this.setState({
        updateMode: "Update",
      });
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      };

      axios
        .get(
          process.env.REACT_APP_BACKEND_URL + "/api/packages/" + packageId,
          config
        )
        .then(({ data }) => {
          let newImgPath =
            "http://localhost:5000/packageImages/" + data.ImgPath;
          this.setState({
            packageName: data.PackageName,
            packageDescription: data.PackageDescriprion,
            packagePrice: data.PackagePrice,
            imgPath: newImgPath,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  onPackageNameChange(e) {
    $("#packageName").css("background-color", "#fff");
    this.setState({
      packageName: e,
    });
  }
  onPackageDesChange(e) {
    $("#packageDes").css("background-color", "#fff");
    this.setState({
      packageDescription: e,
    });
  }
  onPackagePriceChange(e) {
    $("#packagePrice").css("background-color", "#fff");
    this.setState({
      packagePrice: e,
    });
  }
  fileChange = (event) => {
    let file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        imgPath: [reader.result],
      });
    }.bind(this);
    this.setState({
      Img: file,
      editChanger: "imgUpdate",
    });
  };
  searchChange = (event) => {
    this.setState({
      searchVal: event.target.value,
    });
  };
  formValidate() {
    var validate = true;

    if (this.state.packageName === "") {
      validate = false;
      $("#packageName").css("background-color", "#ffc0c0");
    }
    if (this.state.packageDescription === "") {
      validate = false;
      $("#packageDes").css("background-color", "#ffc0c0");
    }
    if (this.state.packagePrice === "") {
      validate = false;
      $("#packagePrice").css("background-color", "#ffc0c0");
    }
    return validate;
  }
  submitPackage(e) {
    if (this.formValidate()) {
      if (this.state.updateMode == "Update") {
        const packageId = this.props.location.data;
        try {
          let formData = new FormData();
          let file = this.state.Img;

          formData.append("ImgPath", file);
          formData.append("PackageName", this.state.packageName);
          formData.append("PackageDescriprion", this.state.packageDescription);
          formData.append("PackagePrice", this.state.packagePrice);

          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          axios
            .put(
              process.env.REACT_APP_BACKEND_URL + "/api/packages/" + packageId,
              formData,
              config
            )
            .then((res) => {
              alert("successed");
              window.location = "/PackageDetails";
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          let formData = new FormData();
          let file = this.state.Img;

          formData.append("ImgPath", file);
          formData.append("PackageName", this.state.packageName);
          formData.append("PackageDescriprion", this.state.packageDescription);
          formData.append("PackagePrice", this.state.packagePrice);

          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          axios
            .post(
              process.env.REACT_APP_BACKEND_URL + "/api/packages/",
              formData,
              config
            )
            .then((res) => {
              alert("successed");
              window.location = "/PackageDetails";
            });
        } catch (err) {
          console.log(err);
        }
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
                        backgroundImage: `url(${this.state.imgPath})`,
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h4 class="text-dark mb-4">
                          {this.state.updateMode}| Gym Package
                        </h4>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="text"
                            id="packageName"
                            placeholder="Enter Package Name..."
                            name="name"
                            value={this.state.packageName}
                            onChange={(e) =>
                              this.onPackageNameChange(e.target.value)
                            }
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control form-control-user"
                            type="text"
                            id="packageDes"
                            placeholder="Enter Package Description..."
                            name="description"
                            value={this.state.packageDescription}
                            onChange={(e) =>
                              this.onPackageDesChange(e.target.value)
                            }
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="number"
                            id="packagePrice"
                            placeholder="Enter Package Price..."
                            name="price"
                            value={this.state.packagePrice}
                            onChange={(e) =>
                              this.onPackagePriceChange(e.target.value)
                            }
                          />
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control form-control-user"
                            type="file"
                            id="exampleInputEmail"
                            name="Image"
                            style={{ padding: "2px" }}
                            onChange={(e) => this.fileChange(e)}
                          />
                        </div>

                        <div class="form-group">
                          <button
                            class="btn btn-primary btn-block text-white btn-user additemBtn"
                            type="button"
                            onClick={(e) => this.submitPackage(e.target.value)}
                          >
                            {this.state.updateMode} Package
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
