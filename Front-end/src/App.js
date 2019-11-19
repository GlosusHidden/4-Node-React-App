//React
import React from 'react';
import './styles/css/style.css';
//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
//Thunk
import thunk from 'redux-thunk';
//Components
import MainComponent from './components/MainComponent';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}

store.subscribe(() =>
  console.log(store.getState())
)

export default App;
