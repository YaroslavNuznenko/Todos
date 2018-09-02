import React from "react";

import classes from "./Input.css";

const Input = (props) => {
    const inputClasses = [];
    let inputElement;
    switch (props.inputClass) {
        case "big":
            inputClasses.push(classes.InputBig);
            break;
        case "checkbox":
            inputClasses.push(classes.Checkbox);
            break;
        default:
            inputClasses.push(classes.InputDefault);
    }

    switch (props.type) {
        case "text":
            inputElement = (
                    <input
                        type={props.type}
                        value={props.value}
                        required={props.required}
                        placeholder={props.placeholder}
                        className={inputClasses.join(" ")}
                        onChange={props.changed}
                        onKeyDown={props.keydown}
                        name={props.name}
                    />

            );
            break;
        case "checkbox":
            inputElement = (
                <label className={classes.CheckboxContainer}>
                <input
                    type={props.type}
                    onChange={props.changed}
                    name={props.name}
                    checked={props.checked}
                />
                    <span className={classes.CheckboxMark}></span>
              </label>

            );
            break;
    }

    return <div className={classes.Input}>{inputElement}</div>;
}

export default Input;
