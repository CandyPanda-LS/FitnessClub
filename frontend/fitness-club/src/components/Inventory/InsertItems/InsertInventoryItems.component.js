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

import "./InsertInventoryItems.css";

export default class BurnCalories extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Card
            className="card-border1"
            style={{
              // border: "1px solid #ccc",
              background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
              borderRadius: "20px",
              boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
              margin: "30px",
            }}
          >
            <CardContent>
              <FormControl className="form1">
                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Item"
                />

                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Brand"
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    id="date-picker-dialog"
                    label="Manufactured date"
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Service date"
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  id="filled-basic"
                  className="formInputs"
                  label="Warranty period"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Purchased date"
                    format="MM/dd/yyyy"
                    style={{ maxWidth: "400px" }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  id="filled-basic"
                  className="formInputs"
                  type="file"
                  variant="outlined"
                />

                <Button
                  className="formInputs"
                  variant="outlined"
                  color="primary"
                >
                  Estimate
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
