import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);
    const handleClick = () => {
        setUser({});
    };

    return (
        <div>
            <h1>About Screen</h1>
            <hr/>
            <pre className="container">
                {JSON.stringify(user, null, 3)}
            </pre>
            <button type="button" className="btn btn-secondary mt-3" onClick={handleClick}>LogOut</button>
        </div>
    );
};
