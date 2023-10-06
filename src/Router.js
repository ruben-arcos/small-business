import React from "react";
import { Routes, Route } from "react-router";
import cookie from "cookie";
import ListingContainer from "./containers/ListingContainer";
import DetailsContainer from "./containers/DetailsContainer";
import LoginContainer from "./containers/LoginContainer";
import NavigationContainer from "./containers/NavigationContainer";
import AddContainer from "./containers/AddContainer";
import {Link} from 'react-router-dom'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
// const ProtectedRoute = (props) => {
//   const { component: Component, ...rest } = props;
//   return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
// };

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<ListingContainer />} />
          <Route path="/details/:name" element={<DetailsContainer />} />
          {/* <Route path="/login" element={<LoginContainer />} /> */}
          <Route path="/add" element={<AddContainer />} />
        </Routes>
      );
}

export default Router;