import React, { Component } from 'react';
import {Input, Button} from 'reactstrap'

class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            addedTask: [], 
        }
    }

newTask = (value) => {
    this.setState({
        newTask: value

    })
}

addTask = () => {
    
    this.setState({
        newTask: "",
        addedTask: [...this.state.addedTask, this.state.newTask]
    })
}
deleteTask = (index) => {
    let deletedTask = this.state.addedTask
    deletedTask.splice(index, 1)
    this.setState({
        addedTask: deletedTask
    })  
}


displayList = (newTasks, index) => <p key={index}>{newTasks}  <Button onClick={() => this.deleteTask(index)}> Delete Tasks</Button></p>
    

    render () {
        return (
            <>
            <Input placeholder="add task" onChange={e => this.newTask(e.target.value)} type="text" value={this.state.newTask}/>
            <Button onClick={() => this.addTask()} >Add New Task</Button>
            {this.state.addedTask.map(this.displayList)}
             </>
        )
    }    
}

export default ToDoIndex