import React from "react";
import './listtodo.css';

const Listtodo = (props) => {
    const { list } = props;
    return (
        <>
            { list.length > 0 &&
                <ul className="todo-list">
                    { list.map((todo, index) => (
                        <div className="row">
                            <li key = {index} className="col"> 
                                {todo} 
                            </li>
                            <button className="col delete-button"> Delete </button>
                        </div>
                    ))}
                </ul>
            }
        </>
    )
}

export default Listtodo;