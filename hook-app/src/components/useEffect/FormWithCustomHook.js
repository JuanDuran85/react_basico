import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(()=>{
        console.log('useEffect solo para el email');
    },[email]);

            
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

/*     const handleChangeInput = ({target}) => {
        setstateForm({
            ...stateForm,
            [target.name]: target.value
        })
    } */

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" value={name} name="name" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="email@email.com" value={email} name="email" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={handleInputChange} placeholder="*****"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}
