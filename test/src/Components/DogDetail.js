import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { connect } from 'react-redux';
import { getRepoDetail } from '../Reducers/dogReducer';

class DogDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Breed'),
    };
  };
  componentDidMount() {
    const { name } = this.props.navigation.state.params;
    this.props.getRepoDetail('relferreira', name);
  }
  render() {
	  const { img } = this.props.navigation.state.params;


    const { repoInfo, loadingInfo } = this.props;
    if (loadingInfo) return <Text>Loading...</Text>;

    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count
    } = repoInfo;

    return (
      <View>
		<Image
	  source={{uri: img}} style={{width: 400, height: 400}}/>
        <Text>{this.props.navigation.state.params.name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>Forks: {forks_count}</Text>
        <Text>Stars: {stargazers_count}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
  repoInfo,
  loadingInfo
});

const mapDispatchToProps = {
  getRepoDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);
