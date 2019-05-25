import React from 'react';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Submissions from './containers/Submissions/Submissions';
import HomeActions from './containers/HomeActions/HomeActions';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomeActions}/>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/submissoes" component={Submissions}/>
                    {/* <Route path="/" exact component={Actions}/> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
