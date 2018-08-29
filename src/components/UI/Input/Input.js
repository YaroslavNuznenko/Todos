import React from "react";

import classes from "./Input.css";

const Input = props => {
    console.log(props.value, 'props.value');
    return (
        <div className={classes.Input}>
            <input
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                className={classes.InputElement}
                onChange={props.changed}
            />
        </div>
    );
};

export default Input;
