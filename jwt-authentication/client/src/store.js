import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import rootReducer from './reducers';

const state = {};
const middleware = [thunk];

const store = createStore(rootReducer, state, composeWithDevTools(applyMiddleware(...middleware)));

export default store;