import React from 'react'

const todoList = ({toDos,deleteTodo}) =>{
    return(
        toDos.map(todo =>{
            const {id,input} = todo;
            return(
               <div className="todo__box__list">
                <ul>
                 <li className="todo__box__list-box" key={id}>
                <input type="checkbox" name="checkbox" id="checkbox"/>  
                    <p>{input}</p> 
                    <img src="https://img.icons8.com/flat-round/35/000000/delete-sign.png" alt="icon" onClick={()=>{ deleteTodo(todo.id)}}/>
                </li>   
                </ul> 
                </div>
            )
        })
    )
}

export default todoList;