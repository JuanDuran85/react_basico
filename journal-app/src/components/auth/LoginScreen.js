import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input className="auth__input" type="email"  placeholder="Email" name="email" autoComplete="off" />
                <input className="auth__input" type="password"  placeholder="Password" name="password" />
                <button className="btn btn-primary btn-block" type="submit">Login</button>

                <div className="auth__social-network">
                    <p>Login with social network</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </div>

                <Link to="/auth/register" className="link pointer">Create new accont</Link> 
            </form>
        </>
    );
};