import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({handleAdd}) => {

    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    const handleSubmit = (event)=>{
        event.preventDefault();

        if (descripcion.trim().length <= 1) {
            return;
        };

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        };

        handleAdd(newTodo);
        reset();
    };

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="descrip" className="form-label">Descripción</label>
                    <input type="text" className="form-control" autoComplete="off" placeholder="Aprender ..." name="descripcion" onChange={handleInputChange} value={descripcion}/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-outline-primary">Agregar</button>
                </div>
            </form>
        </>
    );
};

TodoAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};

export default TodoAdd;