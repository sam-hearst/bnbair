import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
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
            <div onClick={openMenu}>
                <i className="far fa-user"></i>
            </div>
            {showMenu && (
                <div className="dropdown-container">
                    <div>
                        <div>Hi {user.username}!</div>
                    </div>
                    <div>
                        <div>Host your home</div>
                    </div>
                    <div>
                        <div>Account</div>
                    </div>
                    <div className="dropdown-container__logout">
                        <div onClick={logout}>Log Out</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;
