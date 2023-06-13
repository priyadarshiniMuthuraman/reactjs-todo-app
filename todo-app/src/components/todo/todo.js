import React, { useState } from "react";
import './todo.css';
import Listtodo from "../listtodo/listtodo";

const ToDo = () => {
    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        console.log(123);
        if(todoItem !== ''){
            console.log(89898);
            setTodoList([...todoList, todoItem]);
            setTodoItem('');
        }
    }
    console.log(todoList);
    console.log(todoItem);
    return (
        <div>
            <h1>React Todo App</h1>
            <div className="input-wrapper">
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Create a new todo"
                    value={todoItem}
                    onChange={(e) => {
                        setTodoItem(e.target.value);
                    }}

                />
                <button className="add-button" onClick={addTodo}>Add</button>
            </div>
            <div className="todoList-wrapper">
                <Listtodo list = {todoList}/>
            </div>
        </div>
    )
}

export default ToDo;