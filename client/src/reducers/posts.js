// a reducer is a function that accepts the state and accepts the action the based on the action type, we want to do some logic
// more specifically we want to return some actions.
// in reducers the state(things found in reducers which in this case we call it posts) = posts always need to be equal something
export default (posts =[], action) => {
    switch (action.type) {
        case 'UPDATE' :
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            case 'FETCH_ALL': // for fetching all teh posts
            return action.payload; // action.payload are actual posts
        case 'CREATE': // create post
            return [ ...posts, action.payload]; 
            case 'DELETE':
                return posts.filter((post) => post._id !== action.payload);
            case 'LIKE':
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts; 
    }
}; 