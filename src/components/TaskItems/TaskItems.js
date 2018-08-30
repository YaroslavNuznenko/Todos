import React from 'react';

import TaskItem from './TaskItem/TaskItem';

const TaskItems = (props) => {
    
    let tasks = props.tasks.map((task, index) => (
        <TaskItem 
            key={task.id} 
            text={task.text}
            editing={task.editing}
            removed={()=> {props.taskRemoved(index)}}
            saved={()=> {props.taskSaved(index)}}
            inputConfig={props.inputConfig}
            changeEditInput={(event) => {props.changeEditInput(event, index)}}
            submitEditForm={(event) => {props.submitEditForm(event, index)}}
            edited={()=> {props.taskEdited(index)}}/>
    ));
    return (
        <div>
            {tasks}
        </div>
    );
};

export default TaskItems;