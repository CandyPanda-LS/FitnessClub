/*
 *
 * @author Ayodya Banuka
 * @desc Advertiesement List Table
 *
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SettingsIcon from '@material-ui/icons/Settings';

import Background from './image/3548.jpg';

//Hover Component For Delete Icon
const HoverDeleteButton = styled.p`
  color: #ffffff;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

//Hover Component For Edit Icon
const HoverEditButton = styled.p`
  color: #ffffff;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;

const columns = [
  {
    id: 'Title',
    label: 'Title',
    align: 'center',
    minWidth: 120,
  },
  { id: 'Description', label: 'Description', align: 'center', minWidth: 100 },
  {
    id: 'Image',
    label: 'Image',
    minWidth: 50,
    align: 'center',
  },
  {
    id: 'EditAdvertisement',
    label: '',
    minWidth: 50,
    align: 'center',
  },
  {
    id: 'DeleteAdvertisement',
    label: '',
    minWidth: 50,
    align: 'center',
  },
];

function createData(
  Title,
  Description,
  Image,
  EditAdvertisement,
  DeleteAdvertisement
) {
  return { Title, Description, Image, EditAdvertisement, DeleteAdvertisement };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 550,
    borderRadius: '20px',
  },
  TableBody: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
    backgroundSize: 'cover',
    backgroundOpacity: 0.5,
  },
});

export default function AdvertisementTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [AdvertiesementList, setAdvertiesementList] = useState([]);

  //fetching meallist data from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/advertisement')
      .then(({ data }) => {
        console.log(data);
        // console.log(data.dailymeallist);
        console.log(data.length);

        if (data.length > 0) {
          setAdvertiesementList(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //map table row data
  const rows = AdvertiesementList.map((currentAdvertisement) => {
    return createData(
      currentAdvertisement.title,
      currentAdvertisement.description,
      currentAdvertisement.advertiesementImage,
      currentAdvertisement._id,
      currentAdvertisement._id
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function deleteMeal(id) {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token'),
      },
    };

    console.log('Delete meal id is ' + id);
    await axios
      .delete('http://localhost:5000/api/profile/dailymeallist/' + id, config)
      .then((response) => {
        console.log(response);
      });

    //rerender meal list(Get meallist Data from the backend)

    await axios
      .get('http://localhost:5000/api/profile/me', config)
      .then(({ data }) => {
        console.log(data.dailymeallist);
        console.log(data.dailymeallist.length);

        if (data.dailymeallist.length > 0) {
          setAdvertiesementList(data.dailymeallist);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Paper
      className={classes.root}
      style={{
        borderRadius: '20px',
        boxShadow: '10px 5px 10px rgba(110, 107, 107, 0.548)',
      }}
      boxShadow={3}
    >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: 'white',
                    backgroundColor: '#db8465',
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
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{ color: 'white' }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : column.id === 'Image' ? (
                            <img
                              src={'uploads/' + value}
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                              }}
                            />
                          ) : column.id === 'EditAdvertisement' ? (
                            <HoverEditButton>
                              <SettingsIcon
                                onClick={() => {
                                  deleteMeal(value);
                                }}
                              />
                            </HoverEditButton>
                          ) : column.id === 'DeleteAdvertisement' ? (
                            <HoverDeleteButton>
                              <DeleteOutlineIcon
                                onClick={() => {
                                  deleteMeal(value);
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
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
