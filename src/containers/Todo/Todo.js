import React, { Component } from "react";

import Input from "../../components/UI/Input/Input";
import TaskItems from "../../components/TaskItems/TaskItems";
import classes from "./Todo.css";

class Todo extends Component {
    state = {
        taskText: "",
        addTaskInput: {
            placeholder: "What needs to be done?",
            type: "text",
            value: "",
            valid: false,
            validation: {
                required: true
            }
        },
        editInput: {
            placeholder: "",
            type: "text",
            value: "",
            name: 'editInput',
            valid: false,
            validation: {
                required: true
            }
        },
        tasks: []
    };

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        return isValid;
    };

    todoHandler = event => {
        event.preventDefault();
        let inputValue = this.state.addTaskInput.value;
        const updatedTasks = this.state.tasks.concat({
            id:
                "id_" +
                Math.random()
                    .toString(36)
                    .substr(2, 9),
            text: inputValue,
            editing: false
        });
        const updatedInput = {
            ...this.state.addTaskInput,
            value: ""
        };

        this.setState({ tasks: updatedTasks });
        this.setState({ taskText: inputValue });
        this.setState({ addTaskInput: updatedInput });
    };

    inputChangedHandler = event => {
        const updatedInput = {
            ...this.state.addTaskInput,
            valid: this.checkValidity(
                event.target.value,
                this.state.addTaskInput.validation
            ),
            value: event.target.value
        };
        this.setState({ addTaskInput: updatedInput });
    };

    taskEditHandler = index => {
        const updatedTasks = this.state.tasks;
        updatedTasks[index].editing = true;

        this.setState({ tasks: updatedTasks });
    };

    taskSaveHandler = index => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks[index].editing = false;

        this.setState({ tasks: updatedTasks });
    };

    editFormHandler = (event, index) => {
        event.preventDefault();

        console.log(event.target);
        const value = event.target.editInput.value;
        const updatedTasks = [...this.state.tasks];

        updatedTasks[index].text = value;
        updatedTasks[index].editing = false;
        this.setState({ tasks: updatedTasks });
    };

    editInputHandler = (event, index) => {
        const updatedInput = {
            ...this.state.editInput,
            valid: this.checkValidity(
                event.target.value,
                this.state.editInput.validation
            ),
            value: event.target.value
        };
        const updatedTasks = [...this.state.tasks];

        updatedTasks[index].text = event.target.value;
        this.setState({ tasks: updatedTasks, editInput: updatedInput });
    };

    taskRemoveHandler = index => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.splice(index, 1);

        this.setState({ tasks: updatedTasks });
    };

    render() {
        return (
            <div className={classes.Todo}>
                <form onSubmit={this.todoHandler}>
                    <Input
                        type={this.state.addTaskInput.type}
                        value={this.state.addTaskInput.value}
                        inputClass="big"
                        required={this.state.addTaskInput.validation.required}
                        placeholder={this.state.addTaskInput.placeholder}
                        changed={this.inputChangedHandler}
                    />
                </form>
                <TaskItems
                    tasks={this.state.tasks}
                    taskRemoved={this.taskRemoveHandler}
                    taskSaved={this.taskSaveHandler}
                    taskEdited={this.taskEditHandler}
                    inputConfig={this.state.editInput}
                    submitEditForm={this.editFormHandler}
                    changeEditInput={this.editInputHandler}
                />
            </div>
        );
    }
}

export default Todo;
