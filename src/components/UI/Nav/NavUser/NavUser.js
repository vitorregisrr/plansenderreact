import React from 'react';

const navUser = props => {
    return (
        <div className="NavUser">
            <img src="../images/avatar-default.png"/>
            <button className="user-name has-dropdown">
                <span>Vitor Régis</span>
                <i className="fa fa-angle-down"></i>
                <nav className="dropdown">
                    <ul>
                        <li>
                            <a>
                                <i className="fa fa-user"></i>Minha Conta</a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-cog"></i>Configurações</a>
                        </li>
                        <hr/>
                        <li>
                            <a>
                                <i className="fa fa-power-off"></i>Logout</a>
                        </li>
                    </ul>
                </nav>
            </button>
        </div>
    )
}

export default navUser;