import React,{Component} from 'react';
import axios from 'axios';


export default class Profile extends Component{

    constructor(props){
        super(props);

        this.profileDelete = this.profileDelete.bind(this);
        this.editInfo = this.editInfo.bind(this);

           this.state = {
               username : "",
               fristName:"",
               lastName:"",
               email:"",
               address:"",
               mobileNo:""
           }
            
    }

//fetching user details from backend
componentDidMount(){

    const token = localStorage.getItem("x-auth-token");

    const config = {
        headers: {
            "x-auth-token" : localStorage.getItem("x-auth-token")
        }
    }

    axios
        .get("http://localhost:5000/api/userprofile/",config)
        .then((response) => {
            this.setState({
                username : response.data.firstName,
                email : response.data.email,
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                address : response.data.address,
                mobileNo : response.data.mobileNo,
            })
         
        })

        .catch((error) => {
            console.log(error);
        })
}


profileDelete(e){

    const token = localStorage.getItem("x-auth-token");

    const config = {
        headers: {
            "x-auth-token" : localStorage.getItem("x-auth-token")
        }
    }


     axios
        .delete("http://localhost:5000/api/userprofile/",config)
        .then((response) => console.log("Profile Deleted"))
        .catch((error) => {
            console.log(error);
          });

         window.location = "/";
}

editInfo(e){
    window.location = "/profileUpdate";
}

    render(){
        return(
            
            <div class="container-fluid">
        <h3 class="text-dark mb-4">My Profile</h3>
        <div class="row mb-3">
          <div class="col-lg-4">
          <div class="card mb-3">
              <div class="card-body text-center shadow">
                <img
                  class="rounded-circle mb-3 mt-4"
                  src="./images/pic2.jpg"
                  width="160"
                  height="160"
                />
                <div class="form-group row">
                      <div class="col-sm-6">
                        <input
                          type="file"
                          id="profImage"
                          name="profImage"/>.
                      </div>
                      </div>

                <div class="mb-3">
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    onClick={this.updateImageHandler}
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            </div>
            <div class="card shadow mb-4"></div>
          </div>
          <div class="col-lg-8">
            <div class="row mb-3 d-none">
              <div class="col">
                <div class="card text-white bg-primary shadow">
                  <div class="card-body">
                    <div class="row mb-2">
                      <div class="col">
                        <p class="m-0">Peformance</p>
                        <p class="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-rocket fa-2x"></i>
                      </div>
                    </div>
                    <p class="text-white-50 small m-0">
                      <i class="fas fa-arrow-up"></i>&nbsp;5% since last month
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-white bg-success shadow">
                  <div class="card-body">
                    <div class="row mb-2">
                      <div class="col">
                        <p class="m-0">Peformance</p>
                        <p class="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-rocket fa-2x"></i>
                      </div>
                    </div>
                    <p class="text-white-50 small m-0">
                      <i class="fas fa-arrow-up"></i>&nbsp;5% since last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="card shadow mb-3">                 
                  <div class="card-body">
                    <form class="profileUpdate1">
                      <div class="form-row">
                        <div class="col">
                          <div class="form-group">
                            <label for="username">
                              <strong>Username</strong>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Username"
                              value={this.state.firstName}
                              name="username"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label for="email">
                              <strong>Email Address</strong>
                            </label>
                            <input
                              class="form-control"
                              type="email"
                              placeholder="user@example.com"
                              value={this.state.email}
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col">
                          <div class="form-group">
                            <label for="firstName">
                              <strong>First Name</strong>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="First name"
                              value={this.state.firstName}
                              name="firstName"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label for="lastName">
                              <strong>Last Name</strong>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Last name"
                              value={this.state.lastName}
                              name="lastName"
                            />
                          </div>
                        </div>
                      </div>                      
                    </form>
                  </div>
                </div>
                <div class="card shadow">
                  
                  <div class="card-body">
                    <form class="profileUpdate2">
                      <div class="form-group">
                        <label for="address">
                          <strong>Address</strong>
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Address"
                          value={this.state.address}
                          name="address"
                        />
                      </div>
                      <div class="form-row">
                        <div class="col">
                          <div class="form-group">
                            <label for="mobileNo">
                              <strong>Mobile Number</strong>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Mobile Number"
                              value={this.state.mobileNo}
                              name="mobileNo"
                            />
                          </div>
                        </div>
                      </div>            
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
        <div class="mb-3" style = {{justifyContent:"space-between"}}>
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    onClick={this.editInfo}
                  >
                    Change Info
                  </button>{' '}{' '}
                  

                  
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    onClick={this.profileDelete}
                  >
                    Delete Profile
                  </button>

                  </div>
                  </center>
                  
      </div>

        );
    }
}
