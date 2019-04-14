import React from 'react';
import Task from './Task';
import './TaskList.scss';

const TaskList = (props) => {
    
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} taskDone={props.taskDone}/>)
    return (
        <div className='task-list'>
            <h3 className='task-list-title'>Lista tasków</h3>
            {tasks.length ? tasks : <p>Brak zadań</p>}
        </div>
    )
}


export default TaskList; 