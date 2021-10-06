import React, { Component } from 'react'

class Add extends Component{
    state ={
        input: null,
        id:null,
    }
    handleChange= (e)=>{
        this.setState({
            [e.target.id] : e.target.value,
        });
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addToDos(this.state)
    }
    render(){
        return(

           
            <div className="todo__box__section">
                <h3>Input TO-DO List</h3>
                <form className="todo__box__section-input" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter a task List" id="input"onChange={this.handleChange}/>
                    <img src="https://img.icons8.com/ios-glyphs/60/000000/add-folder.png" alt="icons"onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}
export default Add;