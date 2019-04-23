import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.scss';

import uuid from 'uuid';

class App extends Component {
    
    state = {
        tasks: [
            {
                id: uuid.v4(),
                text: 'Kup jogurt',
                important: false,
                status: false,
            },
             {
                id: uuid.v4(),
                text: 'Zaprowadź psa do weterynarza',
                important: true,
                status: false,
            },
             {
                id: uuid.v4(),
                text: 'Zadzwoń do Karola z pracy',
                important: false,
                status: true,
            },
         
        ]
    }

deleteTask = (id) => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id)
    this.setState({
        tasks,
    })
}

/*
taskDone = (id) => {
    const task = [...this.state.tasks].map(item => {
      if (item.id === id)
        item.status = !item.status;
      console.log(item.status)
      return item;
    });
    
    this.setState({
        tasks: [].concat(task)
    })
}

*/

taskDone = (id) => {
    const task = this.state.tasks;
    task.map(item => {
        if(item.id === id) {
            item.status = !item.status
        }
        return item;
    })
    
    this.setState({
        tasks: task,
    })
}

addTask = (text, important) => {
    if(text.length) {
    const task = {
        id: uuid.v4(),
        text: text ,
        important: important,
        status: false,
    }
    
    
    this.setState(prevState => ({
        tasks: [...prevState.tasks, task],
    }))
    return true
    }
}

  render() {
    return (
      <div className="app">
        <h1>Lista zadań</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} taskDone={this.taskDone}/>
      </div>
    );
  }
}

export default App;

 