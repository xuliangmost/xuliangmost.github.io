import App from './router'

import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store' // 没必要理解  开发工具而已
import {Provider} from 'react-redux';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'))
;
