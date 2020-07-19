import React from "react";
import Paper from "@material-ui/core/Paper";
import { Chart } from "react-google-charts";

export default function LineChart() {
  const lineChart = (
    <Chart
      // width={"600px"}
      height={"280px"}
      padding={"20px"}
      chartType="Line"
      // loader={<div>Loading Chart</div>}
      data={[
        ["Day", "Guardians of the Galaxy"],
        [1, 37.8],
        [2, 30.9],
        [3, 25.4],
        [4, 11.7],
        [5, 11],
        [6, 8.8],
        [7, 7.6],
        [8, 12.3],
        [9, 16.9],
        [10, 12.8],
        [11, 5.3],
        [12, 6.6],
        [13, 4.8],
        [14, 4.2],
      ]}
      options={{}}
      // rootProps={{ "data-testid": "3" }}
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
