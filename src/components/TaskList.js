import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} taskDone={props.taskDone}/>)
    return (
        <div>
            <div>Lista tasków</div>
            {tasks}
        </div>
    )
}


export default TaskList; 