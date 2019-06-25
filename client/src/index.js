// React imports
import React from 'react';
import ReactDOM from 'react-dom';

//Redux imports
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { watchAuth, watchBurger, watchOrders } from './store/sagas/index';
import reducer from './store/reducer';

// Misc imports
import * as serviceWorker from './serviceWorker';
import './assets/styles/main.scss';
import App from './App';

//Font awesome imports and set icons icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCog, faAngleDown, faPowerOff, faBell, faCheck, faPaperPlane, faList,faCogs, faArrowRight, faCheckSquare, faAtlas, faInfo, faEdit, faTrash, faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faCog, faAngleDown, faPowerOff, faBell, faCheck, faPaperPlane, faList,faCogs, faArrowRight, faCheckSquare, faAtlas, faInfo, faEdit, faTrash, faToggleOff, faToggleOn)

// Redux configs

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

ReactDOM.render(<Provider store={store}> <App /> </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
