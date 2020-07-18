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

import "./DailyMealPlanByUser.css";

import DailyMealTrackerTable from "../../Tables/DailyMealTrackerTable/DailyMealTrackerTable";
import InsertDailyMealPlanByUser from "../../Forms/InsertDailyMealPlanByUser/InsertDailyMealPlanByUser";

export default class DailyMealPlanByUser extends Component {
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
              Daily Meal Plan Tracker
            </Box>
            <hr />
          </Typography>
        </div>
        <div className="col-md-4">
          <InsertDailyMealPlanByUser />
        </div>

        <div className="col-md-8">
          <DailyMealTrackerTable />
        </div>
      </div>
    );
  }
}
