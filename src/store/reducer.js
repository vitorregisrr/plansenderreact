import { combineReducers } from 'redux';

import submissionReducer from './reducer/submission';
import planoReducer from './reducer/plano';
import authReducer from './reducer/auth';

const rootReducer = combineReducers({
    submissios: submissionReducer,
    plano: planoReducer,
    auth: authReducer,
});

export default rootReducer;