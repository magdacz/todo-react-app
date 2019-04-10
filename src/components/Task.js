import React from 'react';

const Task = (props) => {
        
     const taskStyle = {
         textDecoration: props.task.status ? 'line-through' : null,
         color: props.task.important ? 'red' : null,
     }
    
        return (
            <div>
                <p style={taskStyle}>{props.task.text}</p>
                <button onClick={()=> props.delete(props.task.id)}>x</button>
            </div>
        )
}

export default Task; 
