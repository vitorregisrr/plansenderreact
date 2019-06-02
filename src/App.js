import React, { Suspense} from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import { Spinner } from './components/UI';

import Layout from './hoc/Layout/Layout';
const Auth = React.lazy( () => import('./containers/Auth/Auth'));
const Submissions = React.lazy( () => import('./containers/Submissions/Submissions'));
const HomeActions = React.lazy( () => import('./containers/HomeActions/HomeActions'));
const PlansBank = React.lazy( () => import('./containers/PlansBank/PlansBank'));
const NewPlan = React.lazy( () => import('./containers/NewPlan/NewPlan'));

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
        Component: PlansBank

    }, {
        path: '/novoplano',
        name: 'Novo Plano',
        Component: NewPlan
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
                                    <Suspense fallback={<Spinner />}>
                                        <Component/>
                                    </Suspense>
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
