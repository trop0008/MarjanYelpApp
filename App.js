
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import allReducers from './src/reducers/index.js';
import Main from './src/Main.js';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class NativeBaseRedux extends Component {
  render() {
    return (
      <Provider store= {store}>
      <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NativeBaseRedux', () => NativeBaseRedux);
