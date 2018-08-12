import {EventEmitter} from 'events';
import * as constantsDogs from '../constants/dogsConstants';
import dispatcher from "../dispatcher";

class DogsStore extends EventEmitter
{
    constructor(){
        super(...arguments);

        this.dogs = [];
		this.imgs=[];

        this.getDogsData = this.getDogsData.bind(this);
        this.change = this.change.bind(this);
        //this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
		this.getDogsImg = this.getDogsImg.bind(this);
    }

    getDogsData(dogs)
    {
        this.dogs =dogs;
        this.change();
    }

	getDogsImg(breed)
    {
		console.log('!!!! dogsStore getDogsImg breed', breed)
//		let key = Object.keys(breed)[0]
//		console.log('dogsStore getDogsImg breed=', breed[key])
//		console.log('dogsStore getDogsImg Object.keys(breed)[0]=', key)
//
    	this.imgs =breed;
//		console.log('dogsStore getDogsImg imgs=', this.imgs)
        this.emit('changeImg', this.imgs);
//		console.log('dogsStore getDogsImg changeImg ', this.imgs)
    }

    change(){
        this.emit('change', this.dogs);
    }

//    addPost(post)
//    {
//        console.log('!!!', post, this);
//        this.posts.push(post);
//        this.change();
//    }

    handleActions(action){
        switch (action.type)
        {
//            case constantsPosts.ADD_POST: {
//                this.addPost(action.payload);
//                break;
//            }
            case constantsDogs.GET_DOGS: {
                this.getDogsData(action.payload);
                break;
            }
			case constantsDogs.GET_IMG: {
                this.getDogsImg(action.payload);
                break;
            }
        }
    }
}

const dogStoreObj = new DogsStore;
dispatcher.register(dogStoreObj.handleActions);
export default dogStoreObj;
