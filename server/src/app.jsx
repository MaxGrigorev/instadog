import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./app/layouts/Layout";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './app/stores/store';
import {Provider} from 'react-redux';

import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Dogss from './app/pages/Dogs';
import Dog from './app/pages/Dog';
//import Posts from './app/components/post/Posts';
//import Dogs from './app/components/dog/Dogs';

const app = document.getElementById('app');

console.log('app');

ReactDOM.render(
	<Provider store={store}>
	<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="dogs" component={Dogss}>
        	<Route path=":dogsBreed" component={Dog}/>
        </Route>
        <Route path="*" component={PageNotFound} />
    </Route>
</Router>
</Provider>, app);

//        <Route path="users" component={Users}>
//            <Route path=":userId" component={User}/>
//        </Route>
//        <Route path="posts" component={Posts}/>
