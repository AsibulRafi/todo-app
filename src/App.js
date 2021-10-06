import React, { Component } from 'react'
import Add from './addToDo';
import ToDoList from './toDoList';

class App extends Component{
    state={
        toDos:[
            // {input:"Rafi"},
            // {input:"Asibul"},
        ]
    }
    addToDos = (todo)=>{
        todo.id = Math.floor((1+ Math.random())* 0x10000).toString(16).substring(1);
        let toDoAdd = [...this.state.toDos,todo];
        console.log(todo.id)
        this.setState({
            toDos: toDoAdd,
        })
    }
    deleteTodo = (id)=>{
        let toDoDelete = this.state.toDos.filter(todo=>{
            return todo.id !== id;
        }) 
        this.setState({
            toDos: toDoDelete
        })
    }
    render(){
      
        return(
            <>  
                <Add addToDos={this.addToDos}/>
                <ToDoList toDos={this.state.toDos} deleteTodo={this.deleteTodo}/>
            </>
        )
    }
}
export default App;