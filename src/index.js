import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/index';
import Scoresong from './containers/Scoresong';
import './index.css';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  
  <Provider store={store}>
    
    <Scoresong />
  </Provider>,
  document.getElementById('root')
);