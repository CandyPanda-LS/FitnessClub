import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import Background from "./img/1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    color: "#dadce0",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NewsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openMeal, setOpenMeal] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickMealPlan = () => {
    setOpenMeal(!openMeal);
  };

  return (
    <List
      style={{
        borderRadius: "20px",
        // border: "2px solid blue",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize: "cover",
        boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Chest – Barbell Bench Press – 4 sets of 8 reps" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Back – Lat-pulldowns – 4 sets of 10 reps" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Shoulders – Seated Dumbbell Press – 4 sets of 10 reps" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Legs – Leg Extensions – 4 sets of 10 reps" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Biceps – Barbell Bbicep Curls – 3 sets of 10 reps" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Triceps – Triceps Rope Pushdowns – 3 sets of 15 reps" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
