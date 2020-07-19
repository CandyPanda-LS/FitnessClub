import React from "react";
import Paper from "@material-ui/core/Paper";
import { Line, Bar } from "react-chartjs-2";

import "./WeightLineChart.css";

export default function WeightLineChart() {
  const lineChart = (
    <Line
      data={{
        labels: [
          "Day1",
          "Day2",
          "Day3",
          "Day4",
          "Day5",
          "Day6",
          "Day7",
          "Day8",
          "Day9",
          "Day10",
          "Day11",
          "Day12",
          "Day13",
          "Day14",
          "Day15",
          "Day16",
        ],
        datasets: [
          {
            data: [
              65,
              68,
              61,
              61,
              60,
              59,
              49,
              48,
              65,
              68,
              61,
              61,
              60,
              59,
              49,
              48,
            ],
            label: "Weight",
            borderColor: "#32a89e",
            display: false,
            fill: false,
            spanGaps: false,
            steppedLine: false,
            // clip: { left: 5, top: false, right: -2, bottom: 0 },
          },
        ],
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
          {lineChart}
        </Paper>
      </div>
    </div>
  );
}
