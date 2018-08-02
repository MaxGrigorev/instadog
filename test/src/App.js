import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';

import { Navigation } from 'react-native-navigation';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './Reducers/dogReducer';
import DogList from './Components/DogList';
import DogDetail from './Components/DogDetail';

const client = axios.create({
  baseURL: 'http://192.168.1.7:8082',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default () => {
	Navigation.registerComponent('example.FirstTabScreen', () => DogList,store,Provider);
	Navigation.registerComponent('example.SecondTabScreen', () => DogDetail,store,Provider);
	
//	Navigation.startTabBasedApp({
//	  tabs: [
//		{
//		  label: 'One',
//		  screen: 'example.FirstTabScreen', // this is a registered name for a screen
//		  icon: require('./img/logo.svg'),
//		  title: 'Screen One'
//		},
//		{
//		  label: 'Two',
//		  screen: 'example.SecondTabScreen',
//		  icon: require('./img/logo.svg'),
//		  title: 'Screen Two'
//		}
//	  ]
//	});
	
	Navigation.startSingleScreenApp({
	  screen: {
		screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
		title: 'instaDog', // title of the screen as appears in the nav bar (optional)
		navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
		navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	  }
	});
}