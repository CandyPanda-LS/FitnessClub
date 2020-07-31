import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

import WorkoutList from "../../Lists/WorkoutList/WorkoutList.component";
import MealPlanList from "../../Lists/MealPlanList/MealPlanList.component";
import NewsList from "../../Lists/NewsList/NewsList.component";
import CompletedExercises from "../../Tables/CompletedExercises/CompletedExercises.component";
import DailyMealTrackerTable from "../../Tables/DailyMealTrackerTable/DailyMealTrackerTable";
import WeightLineChart from "../../Charts/WeightLineChart/WeightLineChart.component";
import ExercisesPieChart from "../../Charts/ExercisesPieChart/ExercisesPieChart.component";

const UserDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-xl-3 mb-4 headerDumbell">
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
                    <i className="fas fa-dumbbell fa-2x headericonDumbell"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-xl-3 mb-4 headerMeal">
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
                    <i className="fas fa-utensils fa-2x iconheaderMeal"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-xl-3 mb-4 headerRequest">
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
                    <i className="fas fa-bullhorn fa-2x iconheaderRequest"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-xl-3 mb-4 headerShopping">
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
                    <i className="fas fa-shopping-cart fa-2x iconheaderShopping"></i>
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

      <hr />

      <div className="row">
        <div className="col-md-12 col-xl-6 mb-4">
          <WeightLineChart />
          {/* <LineChart /> */}
        </div>
        <div className="col-md-12 col-xl-6 mb-4">
          <ExercisesPieChart />
          {/* <Exercises1PieChart /> */}
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-12 col-xl-6 mb-4">
          <h5
            style={{
              fontFamily: "Comic Sans MS",
              fontWeight: "bold",
              textAlign: "center",
              color: "#e3c100",
              height: 48,
              padding: "10px 30px",
            }}
          >
            Daily Exercise Tracker
          </h5>
          <CompletedExercises />
        </div>
        <div className="col-md-12 col-xl-6 mb-4">
          <h5
            style={{
              fontFamily: "Comic Sans MS",
              fontWeight: "bold",
              textAlign: "center",
              color: "#e0542d",
              height: 48,
              padding: "10px 30px",
            }}
          >
            Daily Meal Tracker
          </h5>
          <DailyMealTrackerTable />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
