import {combineReducers} from 'redux';
import posts from './posts';

//export const reducers = combineReducers({ posts });

export default combineReducers({
    posts, // the only reducer we have in this case is posts.
}); 
