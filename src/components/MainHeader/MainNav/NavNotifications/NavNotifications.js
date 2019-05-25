import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../../UI';

const navNotifications = props => {
    return (
        <div className="Notifications">
            <Dropdown
                className="icon"
                toggle={(
                <React.Fragment>
                    <FontAwesomeIcon className="toggle-icon" icon="bell"/>
                    <div className="Notifications__number">
                        <span>5</span>
                    </div>
                </React.Fragment>
            )}
                content={(
                <nav>
                    <ul className="Notifications__list">
                        {props.children}
                    </ul>
                </nav>
            )}/>
        </div>
    )
}

export default navNotifications;