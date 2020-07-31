import React from "react";
import Paper from "@material-ui/core/Paper";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/animated";

import "./ExercisesPieChart.css";

export default function Exercises1PieChart() {
  /**
   * ---------------------------------------
   * This demo was created using amCharts 4.
   *
   * For more information visit:
   * https://www.amcharts.com/
   *
   * Documentation is available at:
   * https://www.amcharts.com/docs/v4/
   * ---------------------------------------
   */

  // Themes begin
  am4core.useTheme(am4themes_material);
  // Themes end

  var chart = am4core.create("chartdiv", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // chart.legend = new am4charts.Legend();

  chart.data = [
    {
      country: "Lithuania",
      litres: 501.9,
    },
    {
      country: "Czech Republic",
      litres: 301.9,
    },
    {
      country: "Ireland",
      litres: 201.1,
    },
    {
      country: "Germany",
      litres: 165.8,
    },
    {
      country: "Australia",
      litres: 139.9,
    },
    {
      country: "Austria",
      litres: 128.3,
    },
    {
      country: "UK",
      litres: 99,
    },
    {
      country: "Belgium",
      litres: 60,
    },
    {
      country: "The Netherlands",
      litres: 50,
    },
  ];

  chart.innerRadius = 100;

  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "litres";
  series.dataFields.category = "country";

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
          <div id="chartdiv"></div>
        </Paper>
      </div>
    </div>
  );
}
