import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import featureReducer from './feature/feature';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  reducerName: featureReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
