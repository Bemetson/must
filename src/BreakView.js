import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Button,
  DeviceEventEmitter,
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import AndroidBackButton from "react-native-android-back-button";
import Image from 'react-native-transformable-image';

class BreakView extends Component {

  componentWillMount() {
	  this.nfcListener = null;
	  this.nfcListener = DeviceEventEmitter.addListener('NFCCardID', (data) => {
        console.log("NFC ID", data.id);

        const pistepompeliId = "046F7C52872680"; //046F7C52872680

      if (data.id === pistepompeliId) {
        this.props.navigator.push({id: 'GotPoints', points: 1000});
      }
      });
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
          <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 30}}>Tauko!</Text>
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 0, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 18}}>
              Hae pisteesi täältä:{"\n"}
              {"\n"}
              Aalto-yliopiston{"\n"}
              Kandidaattikeskuksen{"\n"}
            </Text>
			<Text style={{flex: 0, textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 18}}>
              
              Y-siiven aula{"\n"}
            </Text>
			<View>
			<Image source={require("./nfc.jpg")} style={{width: '100%', height: '80%'}} enableTransform={false} resizeMode='contain' pixels={{width: 200, height: 200}}/>
			</View>
          </View>
        </View>
		
		<View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#f9f9f9'}}>
			<Image source={require("./ok2.jpg")} style={{width: '100%', height: '100%'}} resizeMode='contain' pixels={{width: 2000, height: 2000}}/>
		</View>
		<View style={{paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10}}>
		<Button onPress={() => this.props.navigator.pop()}
              title="Takaisin"
              color="#8BC34A"
              accessibilityLabel="Go back to main screen"
            />
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
)(BreakView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  
});

//<Image source={require("./ok1.jpg")} style={{flex: 0, width: "100%", margin: 20, backgroundColor: 'white'}} resizeMode='contain' />