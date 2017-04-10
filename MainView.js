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
  Navigator,
  Button,
  ToolbarAndroid
} from 'react-native';
import Plim from './Plim';

import nativeImageSource from 'nativeImageSource';

export default React.createClass({
  render() {
	return (
		<View style={styles.container}>
			<ToolbarAndroid
				style={styles.toolbar}
				title={this.props.title}
				subtitle={'Joo'}
				navIcon={nativeImageSource({
					android: 'ic_menu_black_24dp',
					width: 48,
					height: 48
				})}
			/>
			<View style={styles.main}>
				<Text style={styles.welcome}
				onPress={() => this.props.navigator.push({id: 'Plim'})}>
					ASDFGHJ
				</Text>
			</View>
			
		</View>
    );
  }

});


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BC34A',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
	alignSelf: 'center',
    color: '#FF5722',
    margin: 10,
	backgroundColor: '#8BC34A',
  },
  toolbar: {
	  height: 56,
	  backgroundColor: '#FF5722',
	  elevation: 7
  },
});
  
  /*
  <Button
		onPress = {}
		title = "Press me!"
		color="#FF5722"
		accessibilityLabel="More coming soon"
		/>
		*/
