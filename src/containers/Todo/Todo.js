import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import Input from "../../components/UI/Input/Input";
import TaskItems from "../TaskItems/TaskItems";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Todo.css";

class Todo extends Component {
    state = {
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
            name: "editInput",
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

    //main input
    newTaskHandler = event => {
        event.preventDefault();
        let inputValue = this.state.addTaskInput.value;
        const updatedTasks = this.state.tasks.concat({
            id:
                "id_" +
                Math.random()
                    .toString(36)
                    .substr(2, 9),
            text: inputValue,
            isDone: false,
        });
        const updatedInput = {
            ...this.state.addTaskInput,
            value: ""
        };

        this.setState({ tasks: updatedTasks });
        // this.setState({ taskText: inputValue });
        this.setState({ addTaskInput: updatedInput });
    };

    //main input
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

    taskSaveHandler = (input) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.forEach(task=>{
            if(task.id === input.id)
                task.text = input.value;
        })
        this.setState({tasks: updatedTasks})
    };

    editInputHandler = (event, index) => {
        event.preventDefault();
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
    
    taskRemoveHandler = id => {
        const updatedTasks = this.state.tasks.filter((task)=> task.id!==id);
        this.setState({ tasks: updatedTasks });
    };

    taskDoneHandler = (event, id) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.forEach((task)=>{
            if(task.id === id){
                task.isDone = event.target.checked;
            }
        })
        this.setState({ tasks: updatedTasks });
    };

    render() {

        let TasksController = (props) => (
            <TaskItems
                {...props}
                tasks={this.state.tasks}
                taskRemoved={this.taskRemoveHandler}
                taskSaved={this.taskSaveHandler}
                taskDone={this.taskDoneHandler}
                taskEdited={this.taskEditHandler}
                inputConfig={this.state.editInput}
                submitEditForm={this.editFormHandler}
                changeEditInput={this.editInputHandler}
            />
        );
        
        return (
            <div className={classes.Todo}>
                <form onSubmit={this.newTaskHandler}>
                    <Input
                        type={this.state.addTaskInput.type}
                        value={this.state.addTaskInput.value}
                        inputClass="big"
                        required={this.state.addTaskInput.validation.required}
                        placeholder={this.state.addTaskInput.placeholder}
                        changed={this.inputChangedHandler}
                    />
                </form>
                <Switch>
                    <Route exact path="/Todos" component={(props) => TasksController(props)} />
                    <Route exact path="/active" component={(props) => TasksController(props)} />
                    <Route exact path="/completed" component={(props) => TasksController(props)} />
                </Switch>
                <Navigation tasks={this.state.tasks} />
            </div>
        );
    }
}

export default withRouter(Todo);
