import React from 'react';

import './Notifications.scss'

const notifications = props => {
    return (
        <div class="notifications">
            <button class="icon has-dropdown">
                <i class="fa fa-bell"></i>
                <div class="notifications__number">
                    <span>5</span>
                </div>
                <nav class="dropdown">
                    <ul class="notifications__list">
                        { props.children }
                    </ul>
                </nav>
            </button>
        </div>
    )
}

return notifications;