import React from 'react';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const HomeAction = props => {
    return (
        <div className={`HomeAction ${props.color}`}>
            <Link role="button" to={props.link} className="HomeAction-btn">
                <div className="HomeAction__icon">
                    <FontAwesomeIcon className="icon" icon={`${props.icon}`}></FontAwesomeIcon>
                </div>

                <div className="HomeAction__desc">
                    <p className="HomeAction__desc__title">{props.title}</p>
                    <p className="HomeAction__desc__subtitle">{props.subtitle}</p>
                </div>
            </Link>
        </div>
    )
}

export default HomeAction;