import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleClick = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {name: 'Juan'}
        });
        
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    );
};