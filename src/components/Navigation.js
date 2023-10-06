import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = (props) => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{background: "linear-gradient(25deg,#d64c7f,#ee4758 50%)"}}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography  variant="h6" style={{ flexGrow: "1" }}>
         <Link className="logo" to="/">tacosFinder</Link> 
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            {/* <Button variant="contained" component={Link} to="/cesar" >Listings</Button> */}
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/add">Add</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            {props.username ? "Logout" : <Link to="/login">Login</Link>}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;