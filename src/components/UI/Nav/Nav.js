import React from 'react'

import NavUser from './NavUser/NavUser';
import NavNotifications from './NavNotifications/NavNotifications';

const navbar = props => {
    return (
        <nav class="mainNav">
            <NavNotifications>
                <Notification/>
                <Notification/>
                <Notification/>
            </NavNotifications>
            <NavUser />
        </nav>
    )
}

export default navbar;