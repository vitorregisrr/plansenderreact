import React from 'react';

import {Link} from 'react-router-dom';

const ContentHeader = props => {
    return (
        <header className="ContentHeader">
            <div className="ContentHeader__desc">
                <h1 className="ContentHeader__desc__title">{props.title}</h1>
                <h2 className="ContentHeader__desc__subtitle">{props.subtitle}</h2>
            </div>
            <div className="ContentHeader__buttons">
                {props.children
                    ? <div className="ContentHeader__buttons__left">
                            <div className="ContentHeader__buttons__filters">
                                <p>Filtrar por:</p>

                                {props.children}
                            </div>
                        </div>
                    : null}
                {props.button
                    ? <div className="ContentHeader__buttons__right">
                            <Link
                                to={props.button.link}
                                role="button"
                                href="bancoplanos.html"
                                className="button-blue">{props.button.label}</Link>
                        </div>
                    : null}
            </div>
        </header>
    )
}

export default ContentHeader;