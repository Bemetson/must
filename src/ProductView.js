import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
  DeviceEventEmitter,
  WebView,
} from 'react-native';
import { connect } from 'react-redux';
import AndroidBackButton from "react-native-android-back-button";


class ProductView extends Component {
  componentWillMount() {
    this.nfcListener = null;
    if (this.props.product.price <= this.props.points) {
      this.nfcListener = DeviceEventEmitter.addListener('NFCCardID', (data) => {
        console.log("NFC ID", data.id);

        const automaattiIds = [
          "045216E2072980",
          "046716E2072980",
          "045316E2072980",
          "046616E2072980",
          "047E16E2072980",
        ];

        if (automaattiIds.indexOf(data.id) != -1) {
          if (this.nfcListener) {
            this.nfcListener.remove();
          }
          this.props.navigator.push({id: 'ProductBought', product: this.props.product});
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.nfcListener) {
      this.nfcListener.remove();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={this.props.product.image} style={{flex: 1, width: "100%", margin: 20, backgroundColor: 'white'}} resizeMode='contain' />
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 0, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 20}}>{this.props.product.name}</Text>
			<Text style={{flex: 0, textAlign: 'center', color: '#333', fontSize: 16, marginTop: 2}}>
				{this.props.product.description}
			</Text>
			<Text style={styles.desc} onPress = { () => {this.props.navigator.push({id: "Browser", product: this.props.product})}}>
				{this.props.product.webname}
			</Text>
			
			<Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 22}}>{this.props.product.price} p</Text>
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 16}}>
              { (this.props.product.price <= this.props.points)
                  ? "Osta tuote koskettamalla\nautomaattia laitteellasi."
                  : "Sinulla ei ole vielä tarpeeksi pisteitä tämän tuotteen ostamiseen."
              }
            </Text>
            <Button onPress={() => this.props.navigator.pop()}
              title="Takaisin"
              color="#8BC34A"
              accessibilityLabel="Cancel buying the product"
            />
          </View>
        </View>
        <AndroidBackButton
          onPress={() => {
            this.props.navigator.pop()
            return true;
          }} />
      </View>
    );
  }
}

export default connect(
  state => ({ points: state.points }),
  dispatch => ({
    buyProduct: (price) => dispatch({ type: 'BUY_PRODUCT', price: price })
  })
)(ProductView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BC34A',
    padding: 20,
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  desc: {
	  flex: 1,
	  textAlign: 'center',
	  color: '#1ba8e0',
	  fontSize: 16,
	  fontWeight: 'normal',
  },
});

