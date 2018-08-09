export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export const GET_DOGS = 'my-awesome-app/dogs/LOAD';
export const GET_DOGS_SUCCESS = 'my-awesome-app/dogs/LOAD_SUCCESS';
export const GET_DOGS_FAIL = 'my-awesome-app/dogs/LOAD_FAIL';

export const GET_REPO_INFO = 'my-awesome-app/repos/INFO';
export const GET_REPO_INFO_SUCCESS = 'my-awesome-app/repos/INFO_SUCCESS';
export const GET_REPO_INFO_FAIL = 'my-awesome-app/repos/INFO_FAIL';

export const GET_USER = 'my-awesome-app/repos/USER';
export const GET_USER_SUCCESS = 'my-awesome-app/repos/USER_SUCCESS';
export const GET_USER_FAIL = 'my-awesome-app/repos/USER_FAIL';

import axios from 'axios';

const initialState = { dogs: [], repos: [], repoInfo: {}, user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: 'Error getting repos info' };
	case GET_DOGS:
      return { ...state, loading: true };
    case GET_DOGS_SUCCESS:
      return { ...state, loading: false, dogs: action.payload.data };
    case GET_DOGS_FAIL:
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

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

export function listDogs() {
  return {
    type: GET_DOGS,
    payload: {
      request: {
        url: `/api/dogs`
      }
    }
  };
}

export function getRepoDetail(user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}


export function addImg(breed,imgUrl) {

  alert('email: ' + breed + ' password: ' + imgUrl)
  axios.post('http://192.168.1.7:8082/api/dogs/add', {
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
