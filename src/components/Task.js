import React from 'react';

const Task = (props) => {
        
     const red = {
            color: 'red',
        }
    
        return (
            <div>
                <p style={props.task.important ? red : null}>{props.task.text}</p>
                <button onClick={()=> props.delete(props.task.id)}>x</button>
            </div>
        )
    
}

export default Task; 