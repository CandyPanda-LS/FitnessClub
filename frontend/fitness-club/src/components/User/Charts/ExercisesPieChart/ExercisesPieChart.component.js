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
            data: [231, 68, 112, 61, 60],
            backgroundColor: [
              "#10de47",
              "#06adbf",
              "#0965ba",
              "#bf00c2",
              "#d9ca00",
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
