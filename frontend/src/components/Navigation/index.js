import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal/index';
import SignupFormModal from '../SignupFormModal/index';
import AddSpotFormModal from '../AddSpotModal/index';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div id="navbar__user-info-btns">
                <div>
                    <AddSpotFormModal />
                </div>
                <div>
                    <ProfileButton user={sessionUser} />
                </div>
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <div className="navbar__container">
            <div className="navbar__home-logo">
                <NavLink exact to="/" className="navbar__home-icon">
                    <div className="home-icon">
                        <i className="fas fa-umbrella-beach" />
                    </div>
                    <h4>brb</h4>
                </NavLink>
            </div>
            <div className="navbar__searchbar">
                <div id="navbar__search-input">
                    <i className="fas fa-search"></i>
                    <input className="search-bar__text" type="text" placeholder="search" name="searchBar" id="searchBar"></input>
                </div>
            </div>
            <div className="navbar__user-info">
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
