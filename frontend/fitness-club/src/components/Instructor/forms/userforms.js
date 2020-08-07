import React, { Component } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  CardContent,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UserPlan() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3
              className="text-center"
              style={{ padding: "20px", color: "#1e678f", fontWeight: "bold" }}
            >
              Add Meal & Workout Plan
            </h3>
          </div>
          <div className="col-md-12" style={{ margin: "0px 0px 20px" }}>
            <Card
              className="card-border1"
              style={{
                // background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <p>Senura Jayadeva</p>
                <p>Male</p>
                <p>Weight 65Kg</p>
                <p>Heigth 180cm</p>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts{" "}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-6">
            <Card
              className="card-border1"
              style={{
                background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
                borderRadius: "20px",
                boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
              }}
            >
              <CardContent>
                <div className="row">
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        Workout One
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        sets
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        reps
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <br />

                {/* Second Workout option */}
                <div className="row">
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        Workout One
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        sets
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        reps
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <br />

                {/* Third Workout option */}
                <div className="row">
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        Workout One
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        sets
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* First Workout option */}
                      <InputLabel id="demo-simple-select-outlined-label">
                        reps
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value=""
                        label="Workout One"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <br />

                <FormControl variant="outlined" className={classes.formControl}>
                  <Button variant="contained" color="primary">
                    Add Workout Plan
                  </Button>
                </FormControl>
              </CardContent>
            </Card>
          </div>

          {/* Add Meal Plan */}
          <div className="col-md-6">
            <Card
              className="card-border1"
              style={{
                background: "linear-gradient(45deg, #ededed 30%, #fcfcfc 90%)",
                borderRadius: "20px",
                boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
              }}
            >
              <CardContent>
                <FormControl variant="outlined" className={classes.formControl}>
                  {/* First Workout option */}
                  <InputLabel id="demo-simple-select-outlined-label">
                    Workout One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value=""
                    label="Workout One"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <br />

                {/* Second Workout option */}
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label-two">
                    {" "}
                    Workout Two
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label-two"
                    id="demo-simple-select-outlined"
                    value=""
                    label="Workout Two"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <br />

                {/* Third Workout option */}
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label-three">
                    {" "}
                    Workout Three
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label-three"
                    id="demo-simple-select-outlined"
                    value=""
                    label="Workout Three"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <br />

                <FormControl variant="outlined" className={classes.formControl}>
                  <Button variant="contained" color="primary">
                    Add Meal Plan
                  </Button>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
