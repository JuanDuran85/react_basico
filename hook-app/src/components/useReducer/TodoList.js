import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map((td,i) =>( 
                <TodoListItem key={td.id} td={td} i={i} handleToggle={handleToggle} handleDelete={handleDelete}/>
            ))
        }
        
    </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default TodoList;