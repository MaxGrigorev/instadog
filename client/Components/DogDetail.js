import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { connect } from 'react-redux';

export default class DogDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Breed'),
    };
  };

  render() {
	  const { img } = this.props.navigation.state.params;

    return (
      <View>
		<Image
	  source={{uri: img}} style={{width: 400, height: 400}}/>
        <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}

