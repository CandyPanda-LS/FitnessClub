import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import axios from "axios";

import HeaderCards from "../Cards/Cards.component";
import HeaderCardsNoPackage from "../Cards/CardsNotSelected.component";
import WorkoutList from "../../Lists/WorkoutList/WorkoutList.component";
import MealPlanList from "../../Lists/MealPlanList/MealPlanList.component";
import NewsList from "../../Lists/NewsList/NewsList.component";
import CompletedExercises from "../../Tables/CompletedExercises/CompletedExercises.component";
import DailyMealTrackerTable from "../../Tables/DailyMealTrackerTable/DailyMealTrackerTable";
import WeightLineChart from "../../Charts/WeightLineChart/WeightLineChart.component";
import ExercisesPieChart from "../../Charts/ExercisesPieChart/ExercisesPieChart.component";
import MealBarChart from "../../Charts/MealBarChart/MealBarChart.component";
import BMICard from "../../BMI/bmicard";

const UserDashboard = () => {
  const [profile, setProfile] = useState("true");
  /*Redirect to login page if there is no token*/
  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    const userRole = localStorage.getItem("userRole");

    if (!token) {
      window.location = "/userlogin";
    }

    if (userRole !== "user") {
      window.location = "/userlogin";
    }

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    async function checkProfile() {
      await axios
        .get("http://localhost:5000/api/profile/me", config)
        .then((response) => {
          if (response.data.package) {
            setProfile("true");
          } else {
            setProfile("false");
          }
        })
        .catch(setProfile("false"));
    }
    // Execute the checkProfile function directly
    checkProfile();
  }, []);

  return (
    <>
      <div>
        {profile === "true" ? <HeaderCards /> : <HeaderCardsNoPackage />}
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
          <BMICard />
        </div>
        <div className="col-md-12 col-xl-6 mb-4">
          <WeightLineChart />
          {/* <LineChart /> */}
        </div>
        <div className="col-md-12 col-xl-6 mb-4">
          <ExercisesPieChart />
          {/* <Exercises1PieChart /> */}
        </div>
        <div className="col-md-12 col-xl-6 mb-4">
          <MealBarChart />
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
