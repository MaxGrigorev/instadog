import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Image
} from 'react-native';

export default class DogList extends Component {

	  static navigationOptions = {
    title: 'instaDOG'
  };

	renderItem=({item})=>(
		<TouchableOpacity
    		style={styles.item}
			onPress={() =>this.props.navigation.navigate('Detail', { name: item.breed, img: item.img })}
    		>

			<View >
				<Image source={{uri: item.img}} style={{width: 200, height: 200}}/>
				<Text style={styles.item}>{item.breed}</Text>
			</View>
    	</TouchableOpacity>
	);

	render(){


		const dogs=[{"_id":"5b4edc6249d74f30e2b46566","breed":"springer-english","img":"https://images.dog.ceo/breeds/springer-english/n02102040_7011.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},
		{"_id":"5b4edca449d74f30e2b46567","breed":"kelpie","img":"https://images.dog.ceo/breeds/kelpie/n02105412_3078.jpg"},{"_id":"5b4edccd49d74f30e2b46568","breed":"rottweiler","img":"https://images.dog.ceo/breeds/rottweiler/n02106550_2832.jpg"},{"_id":"5b4edcf449d74f30e2b46569","breed":"beagle","img":"https://images.dog.ceo/breeds/beagle/n02088364_9650.jpg"},{"_id":"5b4edd1749d74f30e2b4656a","breed":"akita","img":"https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg"}]
		console.log('dogs',dogs)
		return (
			<FlatList
        styles={styles.container}
        data={dogs}
        renderItem={this.renderItem}
		keyExtractor={(item, index) =>  index.toString()}
      />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		flex: 1,
		flexDirection:'row',
		justifyContent: 'center',
        alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},

});
