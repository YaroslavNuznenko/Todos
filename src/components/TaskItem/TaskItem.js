import React, { Component } from "react";

import classes from "./TaskItem.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

class TaskItem extends Component {
    state = {
        input: {
            value: this.props.text,
            id: this.props.id
        },
        isEdit: false
    };

    editToggle = () => {
        const updatedState = this.state.isEdit;
        this.setState({ isEdit: !updatedState });
    };
    inputChangedHandler = event => {
        const updatedInput = {
            ...this.state.input,
            value: event.target.value
        };

        this.setState({ input: updatedInput });
    };

    save = () => {
        this.props.save(this.state.input);
    };

    inputKeyDownHandler = (event) => {
        let ENTER_KEY = 13;
        let ESCAPE_KEY = 27;

        if(event.which === ENTER_KEY){
            this.props.save(this.state.input);
        }else if (event.which === ESCAPE_KEY){
            const updatedInput = {
                ...this.state.input,
                value: this.props.text
            };
    
            this.setState({ input: updatedInput });
            this.editToggle();
        }
    }

    render() {
        let itemClasses = [classes.TaskItem];
        if(this.props.isDone){
            itemClasses.push(classes.Done)
        }

        return (
            <div className={itemClasses.join(" ")}>
                <div className={classes.TextBlock}>
                    <Input
                        type="checkbox"
                        changed={this.props.done}
                        checked={this.props.isDone}
                        inputClass="checkbox"
                    />
                    {this.state.isEdit ? (
                            <Input
                                type="text"
                                value={this.state.input.value}
                                placeholder={this.props.inputConfig.placeholder}
                                required={
                                    this.props.inputConfig.validation.required
                                }
                                keydown={(event)=>this.inputKeyDownHandler(event)}
                                changed={event =>
                                    this.inputChangedHandler(event)
                                }
                                name={this.props.inputConfig.name}
                            />
                    ) : (
                        <p>{this.props.text}</p>
                    )}
                </div>
                <div>
                    {!this.state.isEdit ? (
                        <Button clicked={this.editToggle} type="Edit" />
                    ) : (
                        <Button clicked={this.save} type="Save"  />
                    )}

                    <Button clicked={this.props.removed} type="Remove" />
                </div>
            </div>
        );
    }
}

export default TaskItem;
