import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

//Reducers
import {dogsReducer} from '../reducers/dogsReducer';

//Объединения
const middleware = applyMiddleware(promiseMiddleware(), logger());
const reducers = combineReducers({
    dogs: dogsReducer,

    //user: usersReducer
});

//Создаем стор
const store = createStore(reducers, middleware);

export default store;
