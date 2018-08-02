import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
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

//const Tabs = TabNavigator({
//  RepoList: {
//    screen: RepoList
//  },
//  Profile: {
//    screen: Profile
//  }
//});

const Stack = StackNavigator({
  Home: {
    screen: DogList
  },
  Detail: {
    screen: DogDetail
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
