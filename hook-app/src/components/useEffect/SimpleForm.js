import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [stateForm, setstateForm] = useState({
        name: '',
        email: ''
    });

    const { name, email } = stateForm;

    const handleChangeInput = ({target}) => {
        setstateForm({
            ...stateForm,
            [target.name]: target.value
        })
    }

    useEffect(()=>{
        console.log('useEffect general');
    },[]);

    useEffect(()=>{
        console.log('useEffect para todo el formulario');
    },[stateForm]);

    useEffect(()=>{
        console.log('useEffect solo para el email');
    },[email]);

    return (
        <>
            <h1>Simple Effect</h1>
            <hr/>
            <form >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" value={name} name="name" onChange={handleChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="email@email.com" value={email} name="email" onChange={handleChangeInput}/>
                </div>
            </form>
            {(name === '1234') && <Message />}
        </>
    )
}
