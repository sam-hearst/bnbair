import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import "./LoginForm.css"



function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return (
            <Redirect to='/' />
        )
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        history.push("/");
    }

    const handleDemoSubmit = async () => {
        await dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }));

        history.push("/");
    }


    return (
        <div className="login-container">
            <div className="login__header">
                <header>Login to brb</header>
            </div>
            <div className="login__text-intro">Need a weekend getaway? Login now and start browsing destinations!</div>
            <div className="login__form-container">
                <form onSubmit={handleSubmit} id="login__form">
                    <ul>
                        {errors.map((error, idx) => {
                            return (
                                <li key={idx}>{error}</li>
                            )
                        })}
                    </ul>
                    <div className="login__input-fields">
                        <input type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                            placeholder="username or email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="password"
                        />
                    </div>
                    <div className="login__form-btns">
                        <button type="submit" id="login-btn">Log In</button>
                        <button type="submit" id="demo-btn" onClick={handleDemoSubmit}>Demo User</button>
                    </div>
                </form>
            </div>
        </div >
    )
}


export default LoginForm;
