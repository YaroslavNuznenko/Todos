import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.css";

const Navigation = () => {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem link="/Todos" exact>All</NavigationItem>
            <NavigationItem link="/Todos/active">Active</NavigationItem>
            <NavigationItem link="/Todos/completed">Completed</NavigationItem>
        </ul>
    );
};

export default Navigation;
