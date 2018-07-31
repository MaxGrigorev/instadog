import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';

import { Navigation } from 'react-native-navigation';

export default () => {
	Navigation.registerComponent('example.FirstTabScreen', () => Screen1);
	Navigation.registerComponent('example.SecondTabScreen', () => Screen2);
	
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