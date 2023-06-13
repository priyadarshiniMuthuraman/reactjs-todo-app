import React from "react";
import './listtodo.css';

const Listtodo = (props) => {
    const { list, deleteItem, completeItem, type } = props;
    return (
        <>
            { list.length > 0 && type === 'completedTasks' && <h2>Completed Tasks</h2>}
            { list.length > 0 &&
                <ul className="todo-list">
                    { list.map((todo, index) => (
                        <div className="row">
                            <li key = {index} className={`col ${(type === 'completedTasks' ? 'completed-task-lists' : 'new-tasks')}`}> 
                                {todo} 
                            </li>
                             { 
                                type === "newTasks" && <div className="complete-btn-wrapper col">
                                    <button className="completed-button btn btn-outline-info" onClick={() => { completeItem(todo) }}> Mark as complete </button>
                                </div> 
                            }
                            <div className="delete-btn-wrapper col">
                                <button className="delete-button btn btn-danger" onClick={() => { deleteItem(todo, type) }}> Delete </button>
                            </div>
                        </div>
                    ))}
                </ul>
            }
        </>
    )
}

export default Listtodo;