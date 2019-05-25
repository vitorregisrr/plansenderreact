import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {Dropdown} from '../../../UI';

import Avatar from '../../../../assets/images/avatar-default.png';

const navUser = props => {
    return (
        <div className="User">
            <img src={Avatar} alt="#"/>
            <Dropdown
                toggle={(
                <div className="User__name">
                    <span>Vitor Régis</span>
                    <FontAwesomeIcon className="icon" icon="angle-down"/>
                </div>
            )}
                content={(
                <nav>
                    <ul>
                        <li>
                            <Link to="/minhaconta">
                                <FontAwesomeIcon className="icon" icon="user"/>
                                Minha Conta</Link>
                        </li>
                        <li>
                            <Link to="/configuracoes">
                                <FontAwesomeIcon className="icon" icon="cog"/>
                                Configurações</Link>
                        </li>
                        <hr/>
                        <li>
                            <Link to="/logout">
                                <FontAwesomeIcon className="icon" icon="power-off"/>Logout</Link>
                        </li>
                    </ul>
                </nav>
            )}/>
        </div>
    )
}

export default navUser;