import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Submissions from './containers/Submissions/Submissions';
import HomeActions from './containers/HomeActions/HomeActions';
import BancoPlanos from './containers/BancoPlanos/BancoPlanos';

const routes = [
    {
        path: '/',
        name: 'Home',
        Component: HomeActions
        
    }, {
        path: '/auth',
        name: 'Auth',
        Component: Auth

    }, {
        path: '/submissoes',
        name: 'Submissões',
        Component: Submissions

    }, {
        path: '/meusplanos',
        name: 'Meus Planos',
        Component: BancoPlanos

    }
];

function App() {
    return (
        <BrowserRouter>
            <Layout>
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        {({match}) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="CSSTransition--fade"
                                unmountOnExit>
                                <div className="page">
                                    <Component/>
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </Layout>
        </BrowserRouter>
    );
}

export default App;
