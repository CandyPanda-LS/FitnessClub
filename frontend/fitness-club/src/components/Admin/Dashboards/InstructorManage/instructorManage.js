import React from "react";
//import PropTypes from "prop-types";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Background1 from "../../Images/1.jpg";
import Background2 from "../../Images/2.jpg";
import Background3 from "../../Images/3.png";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
});

export default function InstructorManage() {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background1}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Insructor Manage
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Add, View, Update, Remove Instructor from Here
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to="/insert"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                  >
                    Add
                  </Button>
                </Link>
                <Link to="/list" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                  >
                    View
                  </Button>
                </Link>
                <Link to="/update/:id" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                  >
                    Update
                  </Button>
                </Link>
                <Link to="/remove" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                  >
                    Remove
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background2}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Assign Instructor
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Assign Instructor for a client
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  Assign Instructor
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-sm-6 col-md-4">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background3}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Insructor Utilities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Salary, Leaves, and Reports
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  Salary
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="#contained-buttons"
                >
                  Leave
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                >
                  Report
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}