import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Hoc from "../../../hoc/hoc/Hoc";
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <Hoc>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/logout">Log Out</NavigationItem>
      </Hoc>
    ) : (
      <NavigationItem link="/auth">Sign In</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
