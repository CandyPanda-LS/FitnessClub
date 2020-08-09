import React from "react";
import Paper from "@material-ui/core/Paper";
import { Chart } from "react-google-charts";

export default function LineChart() {
  const lineChart = (
    <Chart
      // width={"600px"}
      height={"320px"}
      padding={"20px"}
      chartType="Line"
      // loader={<div>Loading Chart</div>}
      data={[
        ["Month", "Yearly Income"],
        ["Jan", 37.8],
        ["Feb", 30.9],
        ["Mar", 25.4],
        ["Apr", 11.7],
        ["May", 11],
        ["Jun", 8.8],
        ["Jul", 7.6],
        ["Aug", 12.3],
        ["Sep", 16.9],
        ["Oct", 12.8],
        ["Nov", 5.3],
        ["Dec", 6.6],

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

          margin: "auto",
          justifyContent: "center",

        }}
      >

          {lineChart}

      </div>
    </div>
  );
}
