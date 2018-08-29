import React, { Component } from "react";

import Input from "../../components/UI/Input/Input";
import TaskItems from '../../components/TaskItems/TaskItems'
import classes from "./Todo.css";

class Todo extends Component {
    state = {
        taskText: "",
        addTaskInput: {
            placeholder: "What needs to be done?",
            type: "text",
            value: ""
        },
        tasks: []
    };

    todoHandler = event => {
        event.preventDefault();
        let inputValue = this.state.addTaskInput.value;
        const updatedTasks = this.state.tasks.concat({
            id: 'id_' + Math.random().toString(36).substr(2, 9),
            text: inputValue
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
            value: event.target.value
        };
        this.setState({ addTaskInput: updatedInput });
    };

    render() {
        return (
            <div className={classes.Todo}>
                <form onSubmit={this.todoHandler}>
                    <Input
                        type={this.state.addTaskInput.type}
                        value={this.state.addTaskInput.value}
                        
                        placeholder={this.state.addTaskInput.placeholder}
                        changed={this.inputChangedHandler}
                    />
                </form>
                <TaskItems tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default Todo;
