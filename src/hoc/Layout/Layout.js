import React from 'react'

import MainHeader from '../../components/MainHeader/MainHeader';

const Layout = props => {
    return (
        <React.Fragment>
            <MainHeader></MainHeader>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;