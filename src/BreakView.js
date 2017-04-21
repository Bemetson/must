import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Button,

  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import AndroidBackButton from "react-native-android-back-button";
import Image from 'react-native-transformable-image';

class BreakView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 30}}>Tauko!</Text>
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 1, textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 18}}>
              Lunasta taukopisteesi koskettamalla pistepömpeliä kännykälläsi paikassa{"\n"}
              {"\n"}
              Y-siiven aula{"\n"}
              Kandidaattikeskus{"\n"}
              Aalto-yliopisto{"\n"}
            </Text>
          </View>
		  
        </View>
		<View style={{flex:2, alignItems:'center', justifyContent:'center', backgroundColor: '#f9f9f9'}}>
			<Image source={require("./ok1.jpg")} style={{width: '100%', height: '100%'}} resizeMode='contain' pixels={{width: 2000, height: 2000}}/>
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
    alignItems: 'center',
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