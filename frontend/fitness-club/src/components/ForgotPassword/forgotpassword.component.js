import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "./images/gym2.jpeg";
import axios from "axios";

export default class ForgotPassword extends Component{
    render(){
        return(

            <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-12 col-xl-10">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-flex">
                                    <div class="flex-grow-1 bg-password-image"
                                     style={{
                                        // border: "2px solid blue",
                                        backgroundImage: `url(${Background})`,
                                        backgroundRepeat:
                                          "no-repeat" /* Do not repeat the image*/,
                                        backgroundSize: "cover",
                                        boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",}}></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-2">Forgot Your Password?</h4>
                                            <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form class="user">
                                            <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email"/></div><button class="btn btn-primary btn-block text-white btn-user"
                                                type="submit">Reset Password</button></form>
                                        <div class="text-center">
                                            <a class="small" href="registration">Create an Account!</a></div>
                                        <div class="text-center"><a class="small" href="userlogin">Already have an account? Login!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}