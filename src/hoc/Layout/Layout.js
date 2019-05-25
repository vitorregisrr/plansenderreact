import React from 'react';

import {withRouter} from 'react-router-dom';

import MainHeader from '../../components/MainHeader/MainHeader';

const Layout = props => {
    return (
        <React.Fragment>
            {props.location.pathname !== '/auth'
                ? <React.Fragment>
                        <MainHeader></MainHeader>

                        <main className="MainContent">
                            {props.children}
                        </main>
                    </React.Fragment>
                : props.children}
        </React.Fragment>
    )
}

export default withRouter(Layout);