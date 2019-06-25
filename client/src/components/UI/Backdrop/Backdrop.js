import React from 'react';

import {CSSTransition} from 'react-transition-group';

export const Backdrop = props => {
    return (
        <CSSTransition unmountOnExit mountOnEnter in={props.show} timeout={200} classNames="CSSTransition--fade">
            <div
                className={`Backdrop ${props.transparent
                ? 'transparent'
                : ''}`}
                onClick={props.click}></div>
        </CSSTransition>
    )
}

export default Backdrop;