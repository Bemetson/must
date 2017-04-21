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


class ProductBoughtView extends Component {
  componentDidMount() {
    this.props.buyProduct(this.props.product.price);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
            <View>
              <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 35}}>✔{"\n"}{"\n"}Osto onnistui!</Text>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Button onPress={() => this.props.navigator.popN(2)}
                title="OK"
                color="#8BC34A"
                accessibilityLabel="Siirry takaisin päänäkymään"
              />
          </View>
        </View>
        <AndroidBackButton
          onPress={() => {
            this.props.navigator.popN(2);
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
)(ProductBoughtView);

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
