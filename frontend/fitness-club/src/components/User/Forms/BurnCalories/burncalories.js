import React, { Component } from "react";
import axios from "axios";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  CardContent,
  Card,
  Box,
  Typography,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

import "./burncalories.css";

import CompletedExercises from "../../Tables/CompletedExercises/CompletedExercises.component";

export default class BurnCalories extends Component {
  constructor(props) {
    super(props);

    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeExercise = this.onChangeExercise.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: new Date(),
      query: "",
      gender: "male",
      weight_kg: "",
      height_cm: "",
      age: "",
      nf_calories: 0,
      duration_min: 0,
      time: "",
    };
  }

  componentDidMount() {
    /*Redirect to login page if there is no token*/
    const token = localStorage.getItem("x-auth-token");

    if (!token) {
      window.location = "/userlogin";
    }
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight_kg: e.target.value,
    });
  }

  onChangeHeight(e) {
    this.setState({
      height_cm: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeExercise(e) {
    this.setState({
      query: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const exercise = {
      query: this.state.query + " " + this.state.time + "minutes",
      gender: this.state.gender,
      weight_kg: this.state.weight_kg,
      height_cm: this.state.height_cm,
      age: this.state.age,
    };

    console.log(exercise);

    const configuration = {
      headers: {
        "x-app-id": "3d2faaaf",
        "x-app-key": "4bbd5317c21ba6bd31ebe8229bc69d4f",
        "content-type": "application/json",
      },
    };

    await axios
      .post(
        "https://trackapi.nutritionix.com/v2/natural/exercise",
        exercise,
        configuration
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({
          nf_calories: data.exercises[0].nf_calories,
          duration_min: data.exercises[0].duration_min,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    //Pass Data into the backend

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
        "Content-Type": "application/json",
      },
    };

    const newCompletedExercise = {
      weight: this.state.weight_kg,
      height: this.state.height_cm,
      exercise: this.state.query,
      time: this.state.time,
      calories: this.state.nf_calories,
      date: this.state.date,
    };

    await axios
      .put(
        "http://localhost:5000/api/profile/addcompletedexerciselist",
        newCompletedExercise,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //Update Current Weight and Height into the backend
    const newWeightHeight = {
      weight: this.state.weight_kg,
      height: this.state.height_cm,
    };

    await axios
      .post(
        "http://localhost:5000/api/profile/addcurrentweightheight",
        newWeightHeight,
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //Refresh Page
    window.location = "/addcompletedexerciselist";
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <Typography component="div" variant="body1">
            <Box
              style={{
                background: "linear-gradient(45deg, #4f79bd 30%, #1fb1f0 90%)",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                height: 48,
                padding: "10px 30px",
                textAlign: "center",
              }}
              color="primary.main"
            >
              Workout Tracker
            </Box>
            <hr />
          </Typography>
        </div>
        <div className="col-md-4">
          <Card
            className="card-border1"
            style={{
              // border: "1px solid #ccc",
              background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
              borderRadius: "20px",
              boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
            }}
          >
            <CardContent>
              <FormControl className="form1">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Add Your Weight(kg)"
                  variant="outlined"
                  value={this.state.weight_kg}
                  onChange={this.onChangeWeight}
                />

                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Add Your Height(cm)"
                  variant="outlined"
                  value={this.state.height_cm}
                  onChange={this.onChangeHeight}
                />
                <Select
                  labelId="demo-simple-select-filled-label"
                  className="formInputs"
                  id="demo-simple-select-filled"
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Add Your Age"
                  variant="outlined"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Exercise"
                  variant="outlined"
                  value={this.state.query}
                  onChange={this.onChangeExercise}
                />

                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Time"
                  variant="outlined"
                  value={this.state.time}
                  onChange={this.onChangeTime}
                />

                <Button
                  className="formInputs"
                  onClick={this.onSubmit}
                  variant="outlined"
                  color="primary"
                >
                  Estimate
                </Button>
              </FormControl>
            </CardContent>
          </Card>

          {/* <Card
            className="card-border"
            variant="outlined"
            color="palette.success.light"
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                Estimated burned calories: {this.state.nf_calories} kcal for{" "}
                {this.state.duration_min} minutes
              </Typography>
            </CardContent>
          </Card> */}
        </div>

        <div className="col-md-8">
          <CompletedExercises />
        </div>
      </div>
    );
  }
}
