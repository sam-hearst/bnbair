import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);


        document.getElementById('navbar__user-info-btns').setAttribute('class', 'active'); // set a class that is only active when menu is open
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
            document.getElementById('navbar__user-info-btns').removeAttribute('class');  // remove the class
        };

        document.addEventListener('click', closeMenu);


        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div>
            <button onClick={openMenu}>
                <i className="far fa-user"></i>
            </button>
            {showMenu && (
            <div>
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            </div>
            )}
        </div>
    );
}

export default ProfileButton;
