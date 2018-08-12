export const GET_LIKES = 'GET_LIKES';
export const GET_LIKES_PENDING = 'GET_LIKES_PENDING';
export const GET_LIKES_FULFILLED = 'GET_LIKES_FULFILLED';
export const GET_LIKES_REJECTED = 'GET_LIKES_REJECTED';

export const GET_LIKES_PRESS = 'GET_LIKES_PRESS';
export const GET_LIKES_PRESS_PENDING = 'GET_LIKES_PRESS_PENDING';
export const GET_LIKES_PRESS_FULFILLED = 'GET_LIKES_PRESS_FULFILLED';
export const GET_LIKES_PRESS_REJECTED = 'GET_LIKES_PRESS_REJECTED';

export const GET_DOG = 'GET_DOG';
export const GET_DOG_PENDING = 'GET_DOG_PENDING';
export const GET_DOG_FULFILLED = 'GET_DOG_FULFILLED';
export const GET_DOG_REJECTED = 'GET_DOG_REJECTED';

import * as Url from '../Constants/url';
import axios from 'axios';

const initialState = { dogs: [],dogsLike:[], repos: [], repoInfo: {}, user: {} };

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
    case GET_LIKES_PRESS_PENDING:
      return { ...state, loading: true};
    case GET_LIKES_PRESS_FULFILLED:
      return { ...state, loading: false, dogsLike: action.payload };
    case GET_LIKES_PRESS_REJECTED:
      return { ...state, loading: false, error: 'Error getting dogs info' };
    default:
      return state;
  }
}

export function listDogs() {
  return {
    type: GET_DOG,
    payload: axios.get(Url.BASE_URL+'/api/dogs')
  }
}

export function likeDog(id) {

  let like= axios.post(Url.BASE_URL+'/api/dogs/like', {
    id: id
  })
  .then((response)=> {
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

export function likePress(id,dogsLike) {
  dogsLike.push(id)
  return {
    type: GET_LIKES_PRESS_FULFILLED,
    payload: dogsLike
  };
}

export function addImg(breed,imgUrl) {
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
