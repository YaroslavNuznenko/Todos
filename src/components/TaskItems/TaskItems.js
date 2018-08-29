import React from 'react';

import TaskItem from './TaskItem/TaskItem';

const TaskItems = (props) => {
    
    let tasks = props.tasks.map(task => (
        <TaskItem key={task.id} text={task.text}/>
    ));
    return (
        <div>
            {tasks}
        </div>
    );
};

export default TaskItems;