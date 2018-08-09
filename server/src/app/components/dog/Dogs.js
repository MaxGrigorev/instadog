import React from 'react';
//import DogsStore from '../../stores/dogsStore';
import DogsActions from "../../actions/dogsActions";
import DogsList from "./DogsList";

import store from '../../stores/store';
import {connect} from 'react-redux';

class Dogs extends React.Component {

//    constructor(props)
//    {
//        super(props);
//        this.state = {
//            dogs:[],
//			imgs:[]
//        };
//
//        //this.newPost = this.newPost.bind(this);
//        this.onDogsChange = this.onDogsChange.bind(this);
//		this.onImgsChange = this.onImgsChange.bind(this);
//    }

    render() {

		if(this.props.is_loading){
            return <p>Данные загружаются</p>;
        }

		//console.log('Dogs render', this.state.dogs);
        return (
            <div>
                <DogsList dogs={this.props.dogs} imgs={this.props.imgs} />
            </div>
        );
    }

	//imgs={this.props.imgs}

	//callback из сторэдж
//    onDogsChange(dogs)
//    {
//        this.setState({
//            dogs
//        });
//
//		getImg(dogs) //Action, получаем список img собак
//    }
//
//	onImgsChange(imgs)
//    {
//        this.setState({
//            imgs
//        });
//    }
//
//    componentWillMount(){
//        DogsStore.on('change', this.onDogsChange)
//		DogsStore.on('changeImg', this.onImgsChange)
//
//    }
//
//    componentWillUnmount(){
////        DogsStore.removeEventListener('change', this.onDogsChange);
////		DogsStore.removeEventListener('changeImg', this.onImgsChange);
//		DogsStore.removeAllListeners('changeImg', this.onImgsChange);
//		DogsStore.removeAllListeners('change', this.onDogsChange);
//    }

    componentDidMount(){

		let dogs = DogsActions.getDog();
        this.props.dispatch(dogs);
		let imgs = DogsActions.getImg();
		this.props.dispatch(imgs);

        //getDogs(); //Action, получаем список собак
    }
}

function mapStateToProps(store) {
    return {
        dogs: store.dogs.dogs,
		imgs: store.dogs.imgs,
        is_loading: store.dogs.is_loading
    }
}

export default connect(mapStateToProps)(Dogs);
