import React, {useState} from 'react';

import { Backdrop } from '../../UI/';

export const Dropdown = props => {
    const [isOpen,
        toggleIsOpen] = useState(props.open || false);

    return (
        <React.Fragment>
            <button className='has-dropdown' onClick={() => toggleIsOpen(!isOpen)}>
                {props.toggle}
                <div
                    className={`dropdown ${isOpen
                    ? 'active'
                    : ''}`}>
                    {props.content}
                </div>
            </button>
            <Backdrop show={isOpen} transparent click={() => toggleIsOpen(!isOpen)} />
        </React.Fragment>
    )
}

export default Dropdown;