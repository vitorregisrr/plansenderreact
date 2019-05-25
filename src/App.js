import React from 'react';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Auth from './containers/Auth/Auth';

import Layout from './hoc/Layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Route path="/auth" component={Auth}/>
                 {/* <Route path="/" exact component={Actions}/> */}
            </Layout>
        </BrowserRouter>
    );
}

export default App;
