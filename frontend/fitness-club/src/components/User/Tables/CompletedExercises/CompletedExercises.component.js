import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import Background from "./img/2.jpg";

//Hover Component For Delete Icon
const HoverDeleteButton = styled.p`
  color: #ffffff;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

const columns = [
  { id: "Date", label: "Date", align: "center", minWidth: 120 },
  {
    id: "Exercise",
    label: "Exercise",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Time",
    label: "Time",
    minWidth: 50,
    align: "center",
  },
  {
    id: "Calories",
    label: "Calories",
    minWidth: 50,
    align: "center",
  },
  {
    id: "CompletedExerciseID",
    label: "",
    minWidth: 50,
    align: "center",
  },
];

function createData(Date, Exercise, Time, Calories, CompletedExerciseID) {
  return {
    Date,
    Exercise,
    Time,
    Calories,
    CompletedExerciseID,
  };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 550,
    borderRadius: "20px",
  },
  TableBody: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    backgroundOpacity: 0.5,
  },
});

export default function CompletedExercises() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [completedExerciseList, setCompletedExerciseList] = useState([]);

  //fetching completed Exercise List data from the backend
  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get("http://localhost:5000/api/profile/me", config)
      .then(({ data }) => {
        console.log(data.completedWorkoutList);
        console.log(data.completedWorkoutList.length);

        if (data.completedWorkoutList.length > 0) {
          setCompletedExerciseList(data.completedWorkoutList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function deleteExercise(id) {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    console.log("Delete Exercise id is " + id);
    await axios
      .delete(
        "http://localhost:5000/api/profile/dailyexerciselist/" + id,
        config
      )
      .then((response) => {
        console.log(response);
      });

    //rerender meal list(Get meallist Data from the backend)

    await axios
      .get("http://localhost:5000/api/profile/me", config)
      .then(({ data }) => {
        console.log(data.completedWorkoutList);
        console.log(data.completedWorkoutList.length);

        if (data.completedWorkoutList.length > 0) {
          setCompletedExerciseList(data.completedWorkoutList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //map table row data
  const rows = completedExerciseList.map((currentCompletedExercise) => {
    return createData(
      currentCompletedExercise.date.substring(0, 10),
      currentCompletedExercise.exercise,
      currentCompletedExercise.time,
      currentCompletedExercise.calories,
      currentCompletedExercise._id
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className={classes.root}
      style={{
        // border: "2px solid blue",
        borderRadius: "20px",
        boxShadow: "10px 5px 10px rgba(110, 107, 107, 0.548)",
      }}
    >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "white",
                    backgroundColor: "#e6af00",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.TableBody}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{ color: "white" }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : column.id === "CompletedExerciseID" ? (
                            <HoverDeleteButton>
                              <DeleteOutlineIcon
                                onClick={() => {
                                  deleteExercise(value);
                                }}
                              />
                            </HoverDeleteButton>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
