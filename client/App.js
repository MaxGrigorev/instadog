import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator } from 'react-navigation';

import DogList from './Components/DogList';
import DogDetail from './Components/DogDetail';

const Stack = StackNavigator({
  Home: {
    screen: DogList
  },
  Detail: {
    screen: DogDetail
  }
},
  {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
	  console.log('Stac')
    return (
      <View style={styles.container}>
        <Stack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
