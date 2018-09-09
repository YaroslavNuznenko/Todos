import React, { Component } from "react";

import TaskItem from "../../components/TaskItem/TaskItem";
class TaskItems extends Component {
    state = {
        shownTasks: this.props.tasks,
        path: this.props.match.path

    };
    componentWillMount() {
        let updatedTasks = this.state.shownTasks.filter(task => {
            switch (this.state.path) {
                case "/Todos/active":
                    return !task.isDone;
                case "/Todos/completed":
                    return task.isDone;
                default:
                    return task;
            }
        });
        this.setState({shownTasks: updatedTasks})
    }

    render() {
        let tasks = this.state.shownTasks.map((task) => (
            <TaskItem
                key={task.id}
                text={task.text}
                id={task.id}
                isDone={task.isDone}
                removed={() => {this.props.taskRemoved(task.id)}}
                done={(event) => this.props.taskDone(event, task.id)}
                save = {this.props.taskSaved}
                inputConfig={this.props.inputConfig}
            />
        ));
        return <div>{tasks}</div>;
    }
}

export default TaskItems;
