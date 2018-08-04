import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text_breed: 'Введи название породы', text_img: 'Введи ссылку на картинку'};
  }

  render() {
    return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text_breed) => this.setState({text_breed})}
                value={this.state.text_breed}
            />
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text_img) => this.setState({text_img})}
                value={this.state.text_img}
            />
        </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
export default AddScreen;