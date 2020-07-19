import React from "react";
import Paper from "@material-ui/core/Paper";
import { Doughnut, Pie, Line, Bar } from "react-chartjs-2";

import "./ExercisesPieChart.css";

export default function ExercisesPieChart() {
  const pieChart = (
    <Doughnut
      data={{
        labels: ["Day1", "Day2", "Day3", "Day4", "Day5"],
        datasets: [
          {
            data: [231, 68, 112, 61, 41],
            backgroundColor: [
              "#f1c40f",
              "#fc03f0",
              "#16a085",
              "#037ffc",
              "#fc8003",
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
          }}
        >
          {pieChart}
        </Paper>
      </div>
    </div>
  );
}
