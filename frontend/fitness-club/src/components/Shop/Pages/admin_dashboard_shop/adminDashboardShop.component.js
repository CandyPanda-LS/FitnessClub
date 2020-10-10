import React, { Component } from "react";
import Chart from "../../Charts/YearlyIncome/YearlyIncomeChart";
import BarChart from "../../Charts/BestSellingItems/BestSellingItemBarchart";
import { Link } from "react-router-dom";

export default class adminDashboardShop extends Component {
  constructor(props) {
    super(props);
    //if there is no admin navigate to the login page
    const token = localStorage.getItem("x-auth-token");
    const userRole = localStorage.getItem("userRole");

    if (!token) {
      window.location = "/userlogin";
    }

    if (userRole !== "admin") {
      window.location = "/userlogin";
    }
  }
  render() {
    return (
      <div class="d-flex flex-column" id="content-wrapper">
        <div class="row">
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: "#074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <Link
                          to="/adminItemShop"
                          style={{ textDecoration: "none" }}
                        >
                          <button
                            class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                            type="button"
                            style={{ marginTop: "0px", fontSize: "12px" }}
                          >
                            View Item
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: " #074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <Link
                          to="/insertItemShop"
                          style={{ textDecoration: "none" }}
                        >
                          <button
                            class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                            type="button"
                            style={{ marginTop: "0px", fontSize: "12px" }}
                          >
                            Add item
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ backgroundColor: "#92ade8", borderRadius: "10px" }}
            >
              <div class="card-body">
                <div class="card" style={{ backgroundColor: "#074666" }}>
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <Link to="/adminorderlist">
                        <button
                          class="btn btn-primary d-flex flex-column-reverse flex-shrink-0 justify-content-center align-items-center align-content-center m-auto justify-content-xl-start"
                          type="button"
                          style={{ marginTop: "0px", fontSize: "12px" }}
                        >
                          &nbsp;Genetrate report
                        </button>
                        </Link>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ margin: "15px" }}>
          <div class="col">
            <div
              class="card shadow-lg"
              style={{
                background: "linearGradient(90deg, rgb(146,173,232) 0%, white)",
                height: "339px",
                borderRadius: "29px",
              }}
            >
              <div class="card-body" style={{ borderRadius: "49px" }}>
                <Chart />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{
                borderRadius: "30px",
                backgroundColor: "rgb(255,255,255)",
              }}
            >
              <div class="card-body">
                <BarChart />
              </div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ borderRadius: "30px", backgroundColor: "rgb(7,70,102)" }}
            >
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col" style={{ margin: "15px" }}>
            <div
              class="card shadow-lg"
              style={{ borderRadius: "30px", backgroundColor: "rgb(7,70,102)" }}
            >
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
