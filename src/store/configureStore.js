import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import { schools, users } from '../reducers';
// compose enhancer

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
     schools,
     users,
      routing: routerReducer
    }),
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )  
  return store;
}