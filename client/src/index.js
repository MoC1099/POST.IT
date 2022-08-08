import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import reducers from './reducers';
/*provider is going to keep track of that store whcih is that global state and that allows us to access that
store form anywhere inside of the app we dont have to be exactly in a parent component or in a child component
we can access that state from anywhere; after being finished with the reducers and adding provider component here our application is now using redux
and all of its capabalities.*/

// to set redux we first have to create store.
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);

