
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';

import futch from '../api';

export default class RNCameraRollPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
      progress: 0,
      text_breed: '',
    };
    this.sendServer = this.sendServer.bind(this);
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });
  }
  sendServer() {
    console.log(this.state.selected)
    const photos = this.state.selected;
    const data = new FormData();
    data.append('name', 'testName');
    photos.forEach((photo, index) => {
      data.append('photos', {
        uri: photo.uri,
        type: 'image/jpeg',
        name: this.state.text_breed,
      });
    })
    console.log(data)
    const url = Platform.OS === 'android' ? 'http://192.168.1.7:8082/api/dogs' : 'http://192.168.1.7:8082/api/dogs'; // genymotion's localhost is 10.0.3.2
    futch(url + '/array', {
      method: 'post',
      body: data
    }, (e) => {
      const progress = e.loaded / e.total;
      console.log(progress);
      this.setState({
        progress: progress
      });
    }).then((res) => console.log(res), (e) => console.log(e));
    
    this.props.navigator.resetTo({
        screen: 'example.FirstTabScreen',
        title: undefined,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={1}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages.bind(this)} />

        
          <View style={styles.content}>
            <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text_breed) => this.setState({text_breed})}
                  value={this.state.text_breed}
              />
            <Text style={styles.text}>
              <Text style={styles.bold}> {this.state.num}  {this.state.progress} </Text> images has been selected
            </Text>
          </View>
        <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.sendServer}
               >
               <Text style = {styles.submitButtonText}> Добавить </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
//   container: {
//     paddingTop: 23
//  },
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
});
