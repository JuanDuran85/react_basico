import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({td,i,handleToggle,handleDelete}) => {
    return (
        <li key={td.id} className="list-group-item">
            <p className={`${td.done && 'completed'}`} onClick={()=>handleToggle(td.id)}>{i+1}. {td.desc}</p>
            <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(td.id)}>Borrar</button>
        </li>
    );
};

TodoListItem.propTypes = {
    td: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default TodoListItem;