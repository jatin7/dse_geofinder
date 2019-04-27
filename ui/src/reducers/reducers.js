import {combineReducers} from 'redux';
import {handleAction} from 'redux-actions';
import {routerReducer} from 'react-router-redux';
import RequestReducer from './requestreducer'
import NavigationReducer from './navigationreducer';
import AppReducer from './appreducer'

const reducers = combineReducers({
    RequestReducer,
    NavigationReducer,
    app: AppReducer,
    interval: handleAction(
        'SET_INTERVAL',
        (state, action) => ({
            ...state,
            value : action.data
        }),null
    ),
    routing: routerReducer
});

export default reducers;
