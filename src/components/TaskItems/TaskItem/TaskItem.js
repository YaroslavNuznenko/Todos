import React from "react";

import classes from "./TaskItem.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const TaskItem = props => {
    return (
        <div className={classes.TaskItem}>
            {props.editing ? (
                <form onSubmit={props.submitEditForm}>
                    {/* <input type={props.inputConfig.type}/> */}
                    <Input
                        type={props.inputConfig.type}
                        value={props.text}
                        placeholder={props.inputConfig.placeholder}
                        required={props.inputConfig.validation.required}
                        changed={props.changeEditInput}
                        name={props.inputConfig.name}
                    />
                </form>
            ) : (
                props.text
            )}
            <div>
                {!props.editing ? (
                    <Button clicked={props.edited} type="Edit" />
                ) : (
                    <Button clicked={props.saved} type="Save" />
                )}

                <Button clicked={props.removed} type="Remove" />
            </div>
        </div>
    );
};

export default TaskItem;
