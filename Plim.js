/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.welcome}
		  onPress={() => this.props.navigator.pop()}>
            MUST
          </Text>
        </View>
      </View>
    );
  }
});

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
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5722',
    margin: 10,
  },
});
