import React from "react";

import classes from "./TaskItem.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const TaskItem = props => {

    let itemClasses = [classes.TaskItem];
    props.isDone ? itemClasses.push(classes.Done) : null;

    return (
        <div className={itemClasses.join(' ')}>
            <div  className={classes.TextBlock}>
                <Input
                    type={"checkbox"}
                    clicked={props.done}
                    // name={props.inputConfig.name}
                    inputClass="checkbox"
                />
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
            </div>
            <div>
                {!props.editing ? (
                    <Button clicked={props.edited} type="Edit" >
                        Редактировать
                    </Button>
                ) : (
                    <Button clicked={props.saved} type="Save" >Сохранить</Button>
                )}

                <Button clicked={props.removed} type="Remove" >Удалить</Button>
            </div>
        </div>
    );
};

export default TaskItem;
