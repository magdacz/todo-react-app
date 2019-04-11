import React, { Component } from 'react';

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
        console.log('dodaj');
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
            <div>
            <h2>Dodaj zadanie</h2>
            <input type='text' placeholder='Dodaj nowe zadanie...' value={this.state.value} onChange={this.handleChange}/>
            <input type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox}/>
            <label htmlFor='important'>Priorytet</label>
            <button onClick={this.handleAddTask}>Dodaj</button>
            </div>
        )
    }
}

export default AddTask; 