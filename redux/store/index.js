import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import DevTools from './DevTools';

export default function configureStore (initialState = {}) {
  let finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )(createStore);
  return finalCreateStore(rootReducer, initialState);
}
