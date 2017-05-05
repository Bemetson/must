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


class BrowserView extends Component {
  
  render() {
    return (
      <View style={styles.container}>
	   <WebView
		source={{uri: this.props.product.weblink}}
		style={{width: '100%', height: '100%', padding: 20}}
		/>
		<View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white'}}>
		<Button onPress={() => this.props.navigator.pop()}
              title="Takaisin"
              color="#8BC34A"
              accessibilityLabel="Go back to main screen"
            />
			</View>
      
	  </View>
    );
  }


}

export default connect(
  state => ({ points: state.points }),
)(BrowserView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BC34A',
    padding: 8,
  },
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    elevation: 2,
	alignItems: 'center',
  },
  butt: {
	
    backgroundColor: '#8BC34A',
    elevation: 10,
	justifyContent: 'center',
	textAlign: 'center',
	fontSize: 14,
	fontWeight: 'bold',
	paddingLeft: 20,
	paddingRight: 20,
	color:'white',
	margin: 8,
  },
});
