import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import MainView from './src/MainView';
import ProductView from './src/ProductView';
import GotPointsView from './src/GotPointsView';
import BreakView from './src/BreakView';
import pointStore from './src/PointStore';


const store = createStore(pointStore);

class must extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
        style={{flex: 1}}
        initialRoute={{id: 'Main'}}
        renderScene={this.renderScene} />
      </Provider>
    );
  }
  
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Main':
        return <MainView navigator={navigator} title="Pistelista" />;
      case 'Product':
        return <ProductView navigator={navigator} product={route.product} />;
      case 'GotPoints':
        return <GotPointsView navigator={navigator} />;
      case 'Break':
        return <BreakView navigator={navigator} />;
    }
  }
}

AppRegistry.registerComponent('must', () => must);
