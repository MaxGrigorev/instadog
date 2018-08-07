//import dispatcher from '../dispatcher';
import {GET_DOG,GET_DOGS,GET_IMG,ADD_DOGS} from '../constants/dogsConstants';
import axios from 'axios';

export default class DogsActions
{
	static getDogs() {
    	return {
			type: GET_DOGS,
			payload: axios.get('https://dog.ceo/api/breeds/list/all')
		}
	}

	static getDog() {
		console.log("getDog()")

		console.log("getDog()",axios.get('http://localhost:8082/api/dogs'))
    	return {
			type: GET_DOG,
			payload: axios.get('http://localhost:8082/api/dogs')
		}
	}

	static getImg() {

		let img=axios.get('https://dog.ceo/api/breeds/list/all').then(resDogAll=>{
			let dogList=Object.keys(resDogAll.data.message)
			console.log('getImg()', dogList)

			let urlArray = []

			for (var i = 0; i <  dogList.length; i++){
				urlArray[i]='https://dog.ceo/api/breed/'+dogList[i]+'/images/random'
			}

			let promiseArray = urlArray.map(url => axios.get(url));
			let result=axios.all(promiseArray);

			console.log('result; ',result)

			return result


		}).then(result=>{
			let arrUrl = result.map(url => url.data.message);

			console.log('axios.all(promiseArray); ',arrUrl)
			return arrUrl
		})

		console.log('getImg() payload:img ',img)

		return {
			type: GET_IMG,
			payload:img
		}
	}
//	let urlArray = []
//
//	for (var i = 0; i <  breed.length; i++){
//		urlArray[i]='https://dog.ceo/api/breed/'+breed[i]+'/images/random'
//	}
//
//	console.log('urlArray ',urlArray)
//
//	let promiseArray = urlArray.map(url => axios.get(url));
//	let result=axios.all(promiseArray);
//	console.log(result)
//
//	return {
//		type: GET_IMG,
//		payload: axios.get('https://dog.ceo/api/breeds/list/all')
////				.then((response) => {
////					Object.keys(response.data.message)
////				})
//	}
//
//	}

//	function printax(results){
//		console.log('results ',results)
//		let arrUrl = results.map(url => url.data.message);
//		console.log('arrUrl ',arrUrl)
//
//		dispatcher.dispatch({
//			type: GET_IMG,
//			payload: arrUrl
//		});
//
//}


}

//export function getDogs() {
//
//
//    axios.get('https://dog.ceo/api/breeds/list/all')
//        .then((response) => {
//            dispatcher.dispatch({
//                type: GET_DOGS,
//                payload: Object.keys(response.data.message)
//            });
//        });
//}

//export function getImg(breed) {
//
//	let urlArray = []
//
//	for (var i = 0; i < breed.length; i++){
//		urlArray[i]='https://dog.ceo/api/breed/'+breed[i]+'/images/random'
//	}
//
//	console.log('urlArray ',urlArray)
//
//	let promiseArray = urlArray.map(url => axios.get(url));
//	axios.all(promiseArray)
//		.then((results)=> {
//			printax(results)
//	});
//}
//
//function printax(results){
//	console.log('results ',results)
//	let arrUrl = results.map(url => url.data.message);
//	console.log('arrUrl ',arrUrl)
//
//	dispatcher.dispatch({
//		type: GET_IMG,
//		payload: arrUrl
//	});
//
//}
