import React, { Component } from 'react';
import './AddTask.scss';

class AddTask extends Component {
    
    state = {
        value: '',
        checked: false,
    }
 
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
            
        })
    }
    
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }
    
    handleAddTask = () => {
        const {value, checked} = this.state; 
        const add = this.props.add(value, checked);
        if(add) {
            this.setState({
                value: '',
                checked: false,
            })
        }
    
    }

    
    render() {
        return (
            <div className='add-task'>
            <h2 className='add-task-title'>Dodaj zadanie</h2>
            <div className='add-task-content'>
                <input className='add-task-input' type='text' placeholder='Dodaj nowe zadanie...' value={this.state.value} onChange={this.handleChange}/>
                <input className='add-task-checkbox' type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox}/>
                <label htmlFor='important'>Priorytet</label>
            </div>
            <button className='add-task-btn' onClick={this.handleAddTask}>Dodaj</button>
            </div>
        )
    }
}

export default AddTask; 