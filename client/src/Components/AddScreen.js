import React, { Component } from 'react';
import { AppRegistry, TextInput,View,TouchableOpacity, StyleSheet,Text } from 'react-native';

import { addImg } from '../Reducers/dogReducer';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text_breed: 'Введи название породы', text_img: 'Введи ссылку на картинку'};
  }

  login = (email, pass) =>{
    alert('email: ' + email + ' password: ' + pass)
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

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  ()=> {addImg(this.state.text_breed, this.state.text_img);
                        this.props.navigator.resetTo({
                            screen: 'example.FirstTabScreen',
                            title: undefined,
                        });
                        }
               }>
               <Text style = {styles.submitButtonText}> Добавить </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })