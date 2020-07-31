import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Doughnut } from "react-chartjs-2";

import "./ExercisesPieChart.css";

export default function ExercisesPieChart() {
  const [burnedCalories, setBurnedCalories] = useState([]);

  //fetching completed Exercise List data from the backend
  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyMjMyYjM1ZDFkMmMzYWM0MDJjZjM3In0sImlhdCI6MTU5NjA4NTQ1NywiZXhwIjoxNTk2NDQ1NDU3fQ.wtLn4S2joLleR0LA-mKYzWKNYIrRuojipRuINPUCZ5I",
      },
    };

    axios
      .get("http://localhost:5000/api/profile/me", config)
      .then(({ data }) => {
        console.log(data.completedWorkoutList);
        console.log(data.completedWorkoutList.length);

        if (data.completedWorkoutList.length > 0) {
          setBurnedCalories(data.completedWorkoutList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pieChart = (
    <Doughnut
      data={{
        labels: burnedCalories
          .slice(0, 6)
          .map((burnedcalories) => burnedcalories.exercise)
          .reverse(),
        datasets: [
          {
            data: burnedCalories
              .slice(0, 6)
              .map((burnedcalories) => burnedcalories.calories)
              .reverse(),
            backgroundColor: [
              "#10de47",
              "#06adbf",
              "#0965ba",
              "#bf00c2",
              "#d9ca00",
              "#06adbf",
            ],
            label: "Weight",
          },
        ],
      }}
      options={{
        animation: {
          animateScale: true,
        },
      }}
    />
  );

  return (
    <div>
      <div
        className="weightLineChart"
        style={{
          padding: "10px",
          textAlign: "center",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            textAlign: "center",
            margin: "auto",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          {pieChart}
        </Paper>
      </div>
    </div>
  );
}
