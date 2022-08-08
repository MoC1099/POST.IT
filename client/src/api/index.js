//implementing the class to the api to use this to make api calls
import axios from 'axios'; 

const url = 'http://localhost:3000/posts'; // this url is pointing to our backend route

/* function
now we have to focus on adding redux capabilities, bec all actions towards our backend are going to done using redux
we need to dispatch those actions, to do that we have to add some boilerplate code.
to implement redux you have to add a lot of files and folder but its great in the long run*/ 
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
