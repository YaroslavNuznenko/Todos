import React from "react";

import classes from "./Button.css";

const Button = props => {
    let buttonClasses = [classes.Button];
    let buttonText = "";
    switch (props.type) {
        case "Edit":
            buttonClasses.push(classes.Edit);
            buttonText = "Редактировать";
            break;
        case "Remove":
            buttonClasses.push(classes.Remove);
            buttonText = "Удалить";
            break;
        case "Save":
            buttonClasses.push(classes.Save);
            buttonText = "Сохранить";
            break;
        default:
            return;
    }

    return (
        <button className={buttonClasses.join(" ")} onClick={props.clicked}>
            {buttonText}
        </button>
    );
};

export default Button;
