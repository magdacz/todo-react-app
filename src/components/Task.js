import React from 'react';


const Task =(props)=> {
      
        
       const taskStyle = {
         textDecoration: props.task.status ? 'line-through' : 'none',
         color: props.task.important ? 'red' : 'none',
     }
      
    
        return (
            <div>
                
                <p style={taskStyle}>{props.task.text}</p>
                <button onClick={()=> props.delete(props.task.id)}>x</button>
                <button onClick={()=> props.taskDone(props.task.id)}>zrobione</button>
            </div>
        )
}

export default Task; 
