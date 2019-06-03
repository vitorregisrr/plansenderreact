import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Collapse = (props) => {
    const [expanded,
        setExpanded] = useState(props.expanded && true);
    return (
        <div class="form-group collapse-group">
            <button
                onClick={() => setExpanded(!expanded)}
                class="form__caption collapse__header"
                data-toggle="collapse"
                role="button"
                aria-expanded={expanded}>
                <h4 class="form__caption__title">
                    <i class="fa fa-info"></i>
                    {props.title}
                </h4>
                {props.optional
                    ? <div class="d-flex align-center">
                            <span class="p5">opcional</span>
                            <FontAwesomeIcon
                                className="collapse__header__toggler"
                                icon={expanded
                                ? 'toggle-off'
                                : 'toggle-on'}/>
                        </div>
                    : null}
            </button>
            <div
                class={`form__content collapse__content ${expanded
                ? ''
                : 'collapsed'}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Collapse;