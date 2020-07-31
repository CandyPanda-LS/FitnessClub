import React, { useState, useEffect } from "react";
import axios from "axios";

import { Paper } from "@material-ui/core";

export default function BMICard() {
  const [BMIDetails, setBMIdetails] = useState([]);
  const [BMIValue, setBMIValue] = useState(0);
  const [BMIWeight, setWeight] = useState();
  const [BMIHeight, setHeight] = useState();

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
        console.log("Current Weight is " + data.currentWeight);
        setWeight(data.currentWeight);
        console.log("Current Height is " + data.currentHeight);
        setHeight(data.currentHeight);

        const bmi =
          data.currentWeight /
          ((data.currentHeight / 100) * (data.currentHeight / 100));
        setBMIValue(bmi);

        if (bmi >= 30) {
          setBMIdetails("Obesity");
        } else if (bmi >= 25 && bmi < 29.9) {
          setBMIdetails("Overweight");
        } else if (bmi >= 18.5 && bmi < 24.9) {
          setBMIdetails("Healthy Range");
        } else if (bmi < 18.5) {
          setBMIdetails("Underweight ");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
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
        {" "}
        <p>Current Weight {BMIWeight}</p>
        <p>Current Height {BMIHeight}</p>
        <p>Your BMI {BMIValue}</p>
        <p>{BMIDetails}</p>
      </Paper>
    </div>
  );
}
