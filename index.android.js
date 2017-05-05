import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  DeviceEventEmitter,
} from 'react-native';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

import MainView from './src/MainView';
import ProductView from './src/ProductView';
import GotPointsView from './src/GotPointsView';
import BreakView from './src/BreakView';
import ProductBoughtView from './src/ProductBoughtView';
import pointStore from './src/PointStore';
import BrowserView from './src/BrowserView';


const store = createStore(pointStore);

class must extends Component {
  componentWillMount() {
    var nfcListener = DeviceEventEmitter.addListener('NFCCardID', (data) => {
      console.log("NFC ID", data.id);

      const pistepompeliId = "04435449C72480"; //046F7C52872680

      if (data.id === pistepompeliId) {
        //this.refs.nav.push({id: 'GotPoints', points: 1000});
      }
    });
  }
  componentWillUnmount() {
    this.nfcListener.remove();
  }



  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref="nav"
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
        return <GotPointsView navigator={navigator} newPoints={route.points} />;
      case 'Break':
        return <BreakView navigator={navigator} />;
      case 'ProductBought':
        return <ProductBoughtView navigator={navigator} product={route.product} />;
	  case 'Browser':
		return <BrowserView navigator={navigator} product={route.product} />;
    }
  }
}


AppRegistry.registerComponent('must', () => must);
