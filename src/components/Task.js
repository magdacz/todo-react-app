import React from 'react';

const Task = (props) => {
    
    
    return (
        <div>
            <p>{props.task.text}</p>
            <input type="checkbox" />
            <button onClick={()=> props.delete(props.task.id)}>X</button>
        </div>
    )
}

export default Task; 