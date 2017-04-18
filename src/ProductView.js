import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
} from 'react-native';
import { connect } from 'react-redux';
import AndroidBackButton from "react-native-android-back-button";


class ProductView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={this.props.product.image} style={{flex: 1, width: "100%", margin: 20, backgroundColor: 'white'}} resizeMode='contain' />
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 20}}>{this.props.product.name}</Text>
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 25}}>{this.props.product.price} p</Text>
            <Button onPress={() => {
                this.props.buyProduct(this.props.product.price);
                this.props.navigator.pop();
              }}
              title="Osta"
              color="#8BC34A"
              accessibilityLabel="Buy the product"
              disabled={this.props.points < this.props.product.price}
            />
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 18}}>Osta tuote koskettamalla{"\n"}automaattia laitteellasi.</Text>
            <Button onPress={() => this.props.navigator.pop()}
              title="Peruuta"
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
});

