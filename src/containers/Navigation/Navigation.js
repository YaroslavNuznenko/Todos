import React, { Component } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './Navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={classes.Navigation}>
                <NavigationItem link="/" exact>Все</NavigationItem>
                <NavigationItem link="/active">Активные</NavigationItem>
                <NavigationItem link="/completed">Выполненые</NavigationItem>
            </ul>
        );
    }
}

export default Navigation;
