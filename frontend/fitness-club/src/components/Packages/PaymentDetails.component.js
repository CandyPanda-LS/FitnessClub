/*
 *
 * @author nayana
 *
 */
import React, {
  Component
} from "react";
import "./PaymentDetails.css";
import axios from "axios";

export default class PaymentDetails extends Component {
  constructor(props) {
      super(props);
      this.state = {
          packageName: "",
          packageDescription: "",
          packagePrice: "",
          imgPath: "",
          Img: "",
          editChanger: '',
          updateMode:"Insert"
      };
  }
  componentDidMount() {
      const packageId = this.props.location.data;
      if(packageId!== undefined){
        this.setState({
          updateMode:"Update"
      });
        const config = {
          headers: {
              "x-auth-token": localStorage.getItem("x-auth-token"),
          },
      };

      axios
          .get("http://localhost:5000/api/packages/" + packageId, config)
          .then(({
              data
          }) => {
              let newImgPath = "http://localhost:5000/packageImages/" + data.ImgPath;
              this.setState({
                  packageName: data.PackageName,
                  packageDescription: data.PackageDescriprion,
                  packagePrice: data.PackagePrice,
                  imgPath: newImgPath
              });
          })
          .catch((error) => {
              console.log(error);
          });
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
                  <div class="col-lg-6 d-none d-lg-flex" style={{flex:"auto",maxWidth:"100%"}}>
                    <div
                      class="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: `url(${this.state.imgPath})`,
                      }}
                    >
                      {" "}
                      <div style={{background: "rgba(0, 0, 0, 0.7)",color: "#fff",borderRadius: "20px",}}>
                      <div class="p-5">
                      <div class="text-center">
                    <h3 class="text-light mb-4">Confirm & Pay</h3>
                      </div>
                    <div style={{textAlign:"center",background: "rgba(0, 0, 0, 0.7)",color: "#fff",borderRadius:"30px",paddingTop:"10px",paddingBottom:"10px"}}>
                    <h5 className="text-light mb-4">Package Name : {this.state.packageName}</h5>
                    <h5 className="text-light mb-4">Package Price : {this.state.packagePrice}LKR</h5>
                      </div>
                      <br/>
                      <div style={{textAlign:"center",background: "rgba(0, 0, 0, 0.7)",color: "#fff",borderRadius:"30px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <p>
                          {this.state.packageDescription}
                        </p>
                      </div>
                      <br/>
                        <div >
                          <button
                            class="btn btn-primary btn-block text-white btn-user additemBtn"
                            type="button"
                            
                          >
                           Pay
                          </button>
                        </div>
                      </div>
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
