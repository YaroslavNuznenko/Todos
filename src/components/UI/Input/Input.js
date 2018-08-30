import React from "react";

import classes from "./Input.css";

const Input = props => {
    const inputClasses = [];

    switch (props.inputClass) {
        case "big":
            inputClasses.push(classes.InputBig);
            break;
        default:
            inputClasses.push(classes.InputDefault);
    }
    // console.log(props.invalid, 'props.invalid');
    // if(!props.valid && !props.required){
    //     inputClasses.push(classes.Invalid)
    // }
    console.log(props, 'input props');
    return (
        <div className={classes.Input}>
            <input
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                className={inputClasses.join(' ')}
                onChange={props.changed}
                name={props.name}
            />
        </div>
    );
};

export default Input;
