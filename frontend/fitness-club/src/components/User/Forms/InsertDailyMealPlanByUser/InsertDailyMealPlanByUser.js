import React, { Component } from "react";
import axios from "axios";
import {
  NativeSelect,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  Paper,
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

import { shadows } from "@material-ui/system";

import "./InsertDailyMealPlanByUser.css";

export default class InsertDailyMealPlanByUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFoodName = this.onChangeFoodName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: new Date(),

      ENERC_KCAL: "",
      PROCNT: "",
      FAT: "",
      CHOCDF: "",
      FIBTG: "",
      FoodName: "apple",
    };
  }

  componentDidMount() {}

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeFoodName(e) {
    this.setState({
      FoodName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const meal = {
      ENERC_KCAL: this.state.ENERC_KCAL,
      ENERC_KCAL: this.state.ENERC_KCAL,
      ENERC_KCAL: this.state.ENERC_KCAL,
      ENERC_KCAL: this.state.ENERC_KCAL,
    };

    console.log(meal);

    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${this.state.FoodName}&app_id=a2edaaed&app_key=57145938b514b65e64ce9ca1ce8d7da8`
      )
      .then((response) => {
        this.setState({
          ENERC_KCAL: response.data.parsed[0].food.nutrients.ENERC_KCAL,
          PROCNT: response.data.parsed[0].food.nutrients.PROCNT,
          FAT: response.data.parsed[0].food.nutrients.FAT,
          CHOCDF: response.data.parsed[0].food.nutrients.CHOCDF,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Card
          className="card-border1"
          style={{
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
                  label="Add Date"
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
                label="Add Meal"
                variant="outlined"
                value={this.state.FoodName}
                onChange={this.onChangeFoodName}
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

        <Card
          className="card-border"
          variant="outlined"
          color="palette.success.light"
        >
          <CardContent>
            <Typography variant="h6" component="h2">
              {this.state.FoodName} has about {this.state.ENERC_KCAL} kcal of
              calories , {this.state.PROCNT} grams of proteins and{" "}
              {this.state.FAT} grams of fat
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}
