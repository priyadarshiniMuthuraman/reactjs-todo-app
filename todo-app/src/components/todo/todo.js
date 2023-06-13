import React, { useState } from "react";
import './todo.css';
import Listtodo from "../listtodo/listtodo";

const ToDo = () => {
    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [completedTodoList, setCompletedTodoList] = useState([]);

    const addTodo = () => {
        if(todoItem !== ''){
            setTodoList([...todoList, todoItem]);
            setTodoItem('');
        }
    }
    const deleteTodo = (deleteitem, type) => {
        if(type === 'completedTasks'){
            const updatedTodo = completedTodoList.filter((listItem) => {
                return listItem !== deleteitem
            });
            setCompletedTodoList(updatedTodo);
        } else {
            const updatedTodo = todoList.filter((listItem) => {
                return listItem !== deleteitem
            });
            setTodoList(updatedTodo);
        }
    }
    const completeItem = (item) => {
        deleteTodo(item);
        setCompletedTodoList([...completedTodoList, item]);
    }
    return (
        <div>
            <h1>React Todo App</h1>
                <div className="input-wrapper">
                <form className="form-inline mb-2">
                    <div class="form-group">
                        <input 
                            type="text" 
                            name="todo" 
                            placeholder="Create a new todo"
                            value={todoItem}
                            onChange={(e) => {
                                setTodoItem(e.target.value);
                            }}
                            className="form-control"
                        />
                    </div>
                </form>
                <div className="add-btn-wrapper">
                    <button className="add-button btn btn-primary mb-2" onClick={addTodo}>Add</button>
                </div>
            </div>
            <div className="todoList-wrapper">
                <Listtodo list = {todoList} deleteItem={deleteTodo} completeItem={completeItem} type='newTasks'/>
            </div>
            <div className="todoList-wrapper">
                <Listtodo list = {completedTodoList} deleteItem={deleteTodo} type='completedTasks'/>
            </div>
        </div>
    )
}

export default ToDo;