import React from 'react'

import NavUser from './NavUser/NavUser';
import NavNotifications from './NavNotifications/NavNotifications';
import NavNotification from './NavNotifications/NavNotification/NavNotification';

const navbar = props => {
    return (
        <nav className="MainHeader__nav">
            <NavNotifications>
                <NavNotification/>
                <NavNotification/>
                <NavNotification/>
            </NavNotifications>
            <NavUser/>
        </nav>
    )
}

export default navbar;