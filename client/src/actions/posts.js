import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/Types';
import * as api from '../api/index.js'; // 
/* import everything from the actions as api
that means we'll be able to use this fetch posts like "api.fetchPosts" now we have to create actions
action creators, are fuctions that return actions
after fetching all the posts after sometime that async data will have to pass so we use redux thunk
redux thunk allows us to in here specify an addiotional air function async(dispatch)
now we have created a function that return another function and this allows us to use the async await capabilities
*/ 
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };