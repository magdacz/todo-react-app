import React from 'react';
import './Task.scss';
import cancel from './cancel.svg';
import check from './check.svg';


const Task =(props)=> {
      
       const taskStyle = {
        
         textDecoration: props.task.status ? 'line-through' : 'none',
         
         fontWeight: props.task.important ? '700' : 'none',
         color: props.task.important ? '#BF0000' : 'none',
     }
      
    
        return (
            <div className='task'>
                <div className='task-content'>
                    <button className='task-btn-done' onClick={()=> props.taskDone(props.task.id)}><img src={check} className="check" alt="zrobione" /></button>
                    <p className='task-text' style={taskStyle}>{props.task.text}</p>
                    <button className='task-btn-delete' onClick={()=> props.delete(props.task.id)}><img src={cancel} className="cancel" alt="delete" /></button>
                </div>
            </div>
        )
}

export default Task; 
