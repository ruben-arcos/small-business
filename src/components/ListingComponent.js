import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Chart from '../containers/Chart'
// import Total from '../containers/Total'
// import AddCar from '../containers/AddCar'

const Dashboard = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <Container maxWidth="lg" className="car-container">
      <h4>Welcome, Ruben</h4>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.taquerias.map((taqueria, idx) => (
            <TableRow key={taqueria.id}>
              <TableCell component="th" scope="row">
                <Link to={`/details/${taqueria.name.split(" ").join("-").toLowerCase()}`} state={{id: taqueria.id}} >
                  {taqueria.name}
                </Link>
              </TableCell>
              <TableCell>{taqueria.description}</TableCell>
              <TableCell>{taqueria.hours}</TableCell>
              <TableCell>{taqueria.address}</TableCell>
              <TableCell>
                <DeleteIcon
                  // add onClick method here
                  onClick={() => props.removeTaqueria(idx)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
