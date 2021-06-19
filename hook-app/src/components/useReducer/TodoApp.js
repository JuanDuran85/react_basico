import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

import './style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    const handleDelete = (id) => {
        const action = {
            type: 'remove',
            payload: id,
        };

        dispatch(action);
    };

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id,
        });
    };

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7 border-end border-1 border-dark">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    );
};
