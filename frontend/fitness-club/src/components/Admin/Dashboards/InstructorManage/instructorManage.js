import React from "react";
//import PropTypes from "prop-types";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Background1 from "../../Images/1.jpg";
import Background2 from "../../Images/2.jpg";
import Background3 from "../../Images/Reports.jpg";
import Background4 from "../../Images/4.jpg";
import Background5 from "../../Images/5.jpg";
import Background6 from "../../Images/6.jpg";
import Background7 from "../../Images/7.jpg";
import Background8 from "../../Images/8.jpg";

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
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

export default function InstructorManage() {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="container">
        <div className="row">
          {/* Instructor Manage */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
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
                    Instructor Manipulations from Here
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
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link to="/list" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          {/* Assign Instructor Manage */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
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
                  style={{ color: "white" }}
                >
                  Assign Instructor
                </Button>
              </CardActions>
            </Card>
          </div>

          {/*   Utils */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background3}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Utils
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Reports
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ color: "white" }}
                >
                  Report
                </Button>
              </CardActions>
            </Card>
          </div>

          {/*   Notices */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background4}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Notices
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Notices
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/ManageNotice" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link to="/NoticesTable" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          {/*   Notices */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background5}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Advertisements
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Advertisement
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to="/createadvertiesement"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link
                  to="/advertisementtable"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          {/*   Notices */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background6}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Gym Packages
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Gym Packages
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/ManageGymPackage" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link to="/ManageGymPackage" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          {/*   Notices */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background7}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Inventory
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Inventory
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to="/addinventoryitems"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link to="/inventorytable" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          {/*   Notices */}
          <div
            className="col-sm-6 col-md-4 col-lg-4"
            style={{ marginTop: "30px" }}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Background8}
                  title="Gym Instructor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fitness Updates
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Manage Fitness Updates
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to="/insertFitnessUpdate"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    Add
                  </Button>
                </Link>
                <Link
                  to="/FitnessUpdatesTable"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    href="#contained-buttons"
                    style={{ color: "white" }}
                  >
                    List | Remove | Update
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
