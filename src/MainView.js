import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View,
  TouchableHighlight,
} from 'react-native';
import nativeImageSource from 'nativeImageSource';


const itemHeight = 170;

const products = [
  {
    image: require("./unisport-logo.jpg"),
    imageMargin: 0,
    name: "Unisport kertalippu",
    price: 1000,
  },
  {
    image: require("./vitamin-well-square.jpg"),
    imageMargin: 5,
    name: "Vitamin Well",
    price: 1000,
  },
  {
    image: require("./fressi.jpg"),
    imageMargin: 10,
    name: "Fressi kertalippu",
    price: 1000,
  },
  {
    image: require("./helsingin-kehostudio.jpg"),
    imageMargin: 0,
    name: "Helsingin Kehostudio hieronta",
    price: 1000,
  },
];

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 100, backgroundColor: 'white', elevation: 4, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 25}}
                onPress={() => this.props.navigator.push({id: 'GotPoints'})}>
            123 000 p
          </Text>
        </View>

        <ScrollView style={styles.main}>
          <View style={{marginBottom: 10}}>
            {this.productList()}
          </View>
        </ScrollView>
      </View>
    );
  }

  productList() {
    return products.map((product, i) =>
      <TouchableHighlight key={i} underlayColor="white" onPress={() => this.props.navigator.push({id: 'Product', product: product})}>
        <View style={{margin: 10, marginBottom: 0, height: itemHeight, backgroundColor: 'white', elevation: 3, flex: 1, flexDirection: 'row'}}>
          <Image source={product.image} style={{width: itemHeight-product.imageMargin*2, height: itemHeight-product.imageMargin*2, backgroundColor: 'white', margin: product.imageMargin}} resizeMode='contain' />
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 2, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 20}}>{product.name}</Text>
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 25}}>{product.price} p</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BC34A',
  },
  main: {
    flex: 1,
    backgroundColor: '#8BC34A',
  },
});
