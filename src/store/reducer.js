import { combineReducers } from 'redux';

import submissionReducer from './reducer/submission';
import planoReducer from './reducer/plano';

const rootReducer = combineReducers({
    submissios: submissionReducer,
    plano: planoReducer,
});

export default rootReducer;