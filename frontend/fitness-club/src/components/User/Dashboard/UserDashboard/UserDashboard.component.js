import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

import WorkoutList from "../../Lists/WorkoutList/WorkoutList.component";
import MealPlanList from "../../Lists/MealPlanList/MealPlanList.component";
import NewsList from "../../Lists/NewsList/NewsList.component";
const UserDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-xl-3 mb-4">
          <Link to="find" style={{ textDecoration: "none" }}>
            <div className=" card shadow border-left-primary py-2">
              <div className="card-body headerOptions">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div className="text-uppercase text-primary font-weight-bold text-md mb-1">
                      <span>Workout Tracker</span>
                    </div>
                    <div className="text-dark font-weight-bold text-xs mb-0">
                      <span>Track Your Burned Calories</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dumbbell fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <Link to="food" style={{ textDecoration: "none" }}>
            <div className="card shadow border-left-success py-2">
              <div className="card-body headerOptions">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div className="text-uppercase text-success font-weight-bold text-md mb-1">
                      <span>Meal Tracker</span>
                    </div>
                    <div className="text-dark font-weight-bold text-xs mb-0">
                      <span>Track The Calories For Your Foods </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-utensils fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <Link to="req" style={{ textDecoration: "none" }}>
            <div className="card shadow border-left-info py-2">
              <div className="card-body headerOptions">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div className="text-uppercase text-info font-weight-bold text-md mb-1">
                      <span>Request</span>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="text-dark font-weight-bold text-xs mb-0 mr-3">
                          <span>A Plan From Your Instructor</span>
                        </div>
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-bullhorn fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-xl-3 mb-4">
          <Link to="req" style={{ textDecoration: "none" }}>
            <div className="card shadow border-left-warning py-2">
              <div className="card-body headerOptions">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div className="text-uppercase text-warning font-weight-bold text-md mb-1">
                      <span>Shopping</span>
                    </div>
                    <div className="text-dark font-weight-bold text-xs mb-0">
                      <span>Buy Everything You Need </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-shopping-cart fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-xl-4 mb-4">
          <WorkoutList />
        </div>
        <div className="col-md-6 col-xl-4 mb-4">
          <MealPlanList />
        </div>
        <div className="col-md-6 col-xl-4 mb-4">
          <NewsList />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
