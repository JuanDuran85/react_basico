import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    const user = {
        id: 1234,
        name: 'Nombre Usuario',
        email: 'email@correo.com'
    };

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button type="button" className="btn btn-primary mt-3" onClick={()=> setUser(user)}>Loggin</button>
        </div>
    );
};
