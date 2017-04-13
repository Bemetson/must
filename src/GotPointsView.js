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

export default class GotPointsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
            <View>
              <Text style={{textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 25}}>Plop!{"\n"}{"\n"}Keräsit</Text>
              <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 35}}>1 000</Text>
              <Text style={{textAlign: 'center', color: '#333', fontWeight: 'normal', fontSize: 25}}>pistettä!</Text>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Button onPress={() => this.props.navigator.pop()}
                title="Jes!"
                color="#8BC34A"
                accessibilityLabel="Siirry takaisin päänäkymään"
              />
          </View>
        </View>
      </View>
    );
  }
}

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
