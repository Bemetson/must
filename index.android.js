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
import pointStore from './src/PointStore';


const store = createStore(pointStore);

class must extends Component {
  componentDidMount() {
    var nfcListener = DeviceEventEmitter.addListener('NFCCardID', (data) => {
      console.log("NFC ID", data.id);

      const pistepompeliId = "046F7C52872680";
      const automaattiId = "02190B17";

      if (data.id === pistepompeliId) {
        this.refs.nav.push({id: 'GotPoints', points: 1000});
      } else if (data.id === automaattiId) {
        console.log("Plim! Osto onnistui.");
      }
    });
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
    }
  }
}


AppRegistry.registerComponent('must', () => must);
