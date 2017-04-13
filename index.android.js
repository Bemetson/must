import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import MainView from './src/MainView';
import ProductView from './src/ProductView';
import GotPointsView from './src/GotPointsView';

class must extends Component {
  render() {
    return <Navigator
      style={{flex: 1}}
      initialRoute={{id: 'Main'}}
      renderScene={this.renderScene}
    />;
  }
  
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Main':
        return <MainView navigator={navigator} title="Pistelista" />;
      case 'Product':
        return <ProductView navigator={navigator} product={route.product} />;
      case 'GotPoints':
        return <GotPointsView navigator={navigator} />;
    }
  }
}

AppRegistry.registerComponent('must', () => must);
