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
import "../App.css";

const Dashboard = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <Container className="tableContainer" maxWidth="lg">
      {props.username && (
        <h4>Welcome {props.username}</h4>
      )}
      
      <Table className="tableContainer">
        <TableHead>
          <TableRow>
            <TableCell className="name">Name</TableCell>
            <TableCell sx={{ fontFamily: 'Didact Gothic'}}>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {props.username && (
               <TableCell>Delete</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.taquerias.map((taqueria, idx) => (
            <TableRow key={taqueria.id}>
              <TableCell scope="row">
                <Link to={`/details/${taqueria.name.split(" ").join("-").toLowerCase()}`} state={{id: taqueria.id}} >
                  {taqueria.name}
                </Link>
              </TableCell>
              <TableCell>{taqueria.description}</TableCell>
              <TableCell>{taqueria.hours}</TableCell>
              <TableCell>{taqueria.address}</TableCell>
              {props.username && (
                  <TableCell>
                  <DeleteIcon
                    // add onClick method here
                    onClick={() => props.removeTaqueria(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              )}
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
