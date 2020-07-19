import React from "react";
import Paper from "@material-ui/core/Paper";
import { Line, Bar } from "react-chartjs-2";

import "./WeightLineChart.css";
//https://codepen.io/SPRS/pen/ebMqNZ - donut chart

export default function WeightLineChart() {
  const lineChart = (
    <Line
      data={{
        labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
        datasets: [
          {
            data: [65, 65, 66, 65, 64, 64, 64, 63, 62],
            label: "Weight",

            borderColor: "#06adbf",
            borderWidth: 3,
            lineTension: 2,
            radius: 3,
            pointStyle: "circle",
            fill: false,
            cubicInterpolationMode: "monotone",
            spanGaps: "false",

            // clip: { left: 5, top: false, right: -2, bottom: 0 },
          },
        ],
      }}
      options={{
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },

        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: false,
                drawOnChartArea: true,
              },
            },
          ],
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
          {lineChart}
        </Paper>
      </div>
    </div>
  );
}
