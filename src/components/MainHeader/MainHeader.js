import React from 'react';

import MainNav from './MainNav/MainNav';
import Brand from '../../assets/images/logoIF.png';

import {Link} from 'react-router-dom';

const mainHeader = props => {
    return (
        <header className="MainHeader">
            <div className="container">
                <Link to="/"><img className="brand" src={Brand} alt="Logo"/></Link>
                <MainNav/>
            </div>
        </header>
    )
}

export default mainHeader;