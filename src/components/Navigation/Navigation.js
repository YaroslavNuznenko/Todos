import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.css";

const Navigation = () => {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem link="/" exact>All</NavigationItem>
            <NavigationItem link="/active">Active</NavigationItem>
            <NavigationItem link="/completed">Completed</NavigationItem>
        </ul>
    );
};

export default Navigation;
