import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
    
    state = {
        tasks: [
            {
                id: 1,
                text: 'Kup jogurt',
                important: true,
                status: false,
            },
             {
                id: 2,
                text: 'Zaprowadź psa na szczepienie',
                important: false,
                status: false,
            },
             {
                id: 3,
                text: 'Zadzwoń do Karola z pracy',
                important: false,
                status: true,
            },
            {
                id: 4,
                text: 'Pamiętaj o urodzinach teściowej',
                important: false,
                status: false,
            },
        ]
    }
    
deleteTask = (id) => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id)
    this.setState({
        tasks,
    })
}



addTask = (text, important) => {
    const task = {
        id: 1,
        text: text ,
        important: important,
    }
    
    this.setState(prevState => ({
        tasks: [...prevState.tasks, task]
    }))
    return true
}
    
  render() {
    return (
      <div className="app">
        <h1>Lista zadań</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
