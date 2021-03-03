import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SpotPage from './components/SpotPage';
import Navigation from './components/Navigation';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))

    }, [dispatch])


    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/spots/:id'>
                        <SpotPage />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
