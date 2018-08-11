export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

//export const GET_DOGS = 'my-awesome-app/dogs/LOAD';
export const GET_DOGS_SUCCESS = 'my-awesome-app/dogs/LOAD_SUCCESS';
export const GET_DOGS_FAIL = 'my-awesome-app/dogs/LOAD_FAIL';

export const GET_REPO_INFO = 'my-awesome-app/repos/INFO';
export const GET_REPO_INFO_SUCCESS = 'my-awesome-app/repos/INFO_SUCCESS';
export const GET_REPO_INFO_FAIL = 'my-awesome-app/repos/INFO_FAIL';

export const GET_USER = 'my-awesome-app/repos/USER';
export const GET_USER_SUCCESS = 'my-awesome-app/repos/USER_SUCCESS';
export const GET_USER_FAIL = 'my-awesome-app/repos/USER_FAIL';

export const GET_LIKES = 'GET_LIKES';
export const GET_LIKES_PENDING = 'GET_LIKES_PENDING';
export const GET_LIKES_FULFILLED = 'GET_LIKES_FULFILLED';
export const GET_LIKES_REJECTED = 'GET_LIKES_REJECTED';

export const GET_DOGS = 'GET_DOGS';
export const GET_IMG = 'GET_IMG';
export const GET_IMG_PENDING = 'GET_IMG_PENDING';
export const GET_IMG_FULFILLED = 'GET_IMG_FULFILLED';
export const GET_IMG_REJECTED = 'GET_IMG_REJECTED';
export const GET_DOGS_PENDING = 'GET_DOGS_PENDING';
export const GET_DOGS_FULFILLED = 'GET_DOGS_FULFILLED';
export const GET_DOGS_REJECTED = 'GET_DOGS_REJECTED';
export const ADD_DOGS = 'ADD_DOGS';
export const GET_DOG = 'GET_DOG';
export const GET_DOG_PENDING = 'GET_DOG_PENDING';
export const GET_DOG_FULFILLED = 'GET_DOG_FULFILLED';
export const GET_DOG_REJECTED = 'GET_DOG_REJECTED';

import * as Url from '../Constants/url';

import axios from 'axios';

const initialState = { dogs: [], repos: [], repoInfo: {}, user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
	  case GET_DOG_PENDING:
      return { ...state, loading: true };
    case GET_DOG_FULFILLED:
      return { ...state, loading: false, dogs: action.payload.data };
    case GET_DOG_REJECTED:
      return { ...state, loading: false, error: 'Error getting dogs info' };
    case GET_LIKES_PENDING:
      return { ...state, loading: true};
    case GET_LIKES_FULFILLED:
      return { ...state, loading: false, dogs: action.payload.data };
    case GET_LIKES_REJECTED:
      return { ...state, loading: false, error: 'Error getting dogs info' };
    case GET_REPO_INFO:
      return { ...state, loadingInfo: true };
    case GET_REPO_INFO_SUCCESS:
      return { ...state, loadingInfo: false, repoInfo: action.payload.data };
    case GET_REPO_INFO_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: 'Error getting repo info'
      };
    case GET_USER:
      return { ...state, loadingProfile: true };
    case GET_USER_SUCCESS:
      return { ...state, loadingProfile: false, user: action.payload.data };
    case GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorUser: 'Error getting user info'
      };
    default:
      return state;
  }
}



// export function listDogs() {
//   return {
//     type: GET_DOGS,
//     payload: {
//       request: {
//         url: `/api/dogs`
//       }
//     }
//   };
// }

export function listDogs() {
  return {
    type: GET_DOG,
    payload: axios.get(Url.BASE_URL+'/api/dogs')
  }
}

export function likeDog(id) {
  console.log('id',id)
  let like= axios.post(Url.BASE_URL+'/api/dogs/like', {
    id: id
  })
  .then((response)=> {
    console.log('likeDog',response)
    return response
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: GET_LIKES,
    payload: like
  };
}

export function addImg(breed,imgUrl) {

  alert('email: ' + breed + ' password: ' + imgUrl)
  axios.post(Url.BASE_URL+'/api/dogs/add', {
    breed: breed,
    img: imgUrl
  })
  .then(function (response) {
    return {
      type: GET_DOGS_SUCCESS,
      payload: response
    };
  })
  .catch(function (error) {
    console.log(error);
  });
}
