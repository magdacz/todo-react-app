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
                isDone: false,
            },
             {
                id: 2,
                text: 'Zaprowadź psa na szczepienie',
                isDone: false,
            },
             {
                id: 3,
                text: 'Zadzwoń do Karola z pracy',
                isDone: false,
            },
            {
                id: 4,
                text: 'Pamiętaj o urodzinach teściowej',
                isDone: false,
            },
        ]
    }
    
  render() {
    return (
      <div className="app">
        <h1>Lista zadań</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
