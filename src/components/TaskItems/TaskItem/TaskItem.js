import React from 'react';

import classes from './TaskItem.css';

const TaskItem = (props) => {
    return (
        <div className={classes.TaskItem}>
            {props.text}
        </div>
    );
};

export default TaskItem;