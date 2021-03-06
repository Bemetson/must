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
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import nativeImageSource from 'nativeImageSource';


const itemHeight = 170;

const products = [
  {
    image: require("./aikajepa.jpg"),
    imageMargin: 10,
    name: "SCI-Bundle\nSPECIAL\nVain tänään!",
    price: 1000,
    weblink: "https://liikkuvatoimisto2.wordpress.com/ryhman-esittely/",
	description: "",
	webname: "Tutustu tarkemmin!"
  },
  {
    image: require("./unisport-logo.jpg"),
    imageMargin: 0,
    name: "Unisport kertalippu",
    price: 10000,
    weblink: "https://unisport.fi/?page=liikumeilla#62828886",
	description: "Urheile ilmaiseksi missä tahansa Unisportin toimispisteellä tällä kertalipulla",
	webname: "Unisportin sivuille"
  },
  {
    image: require("./vitamin-well-square.jpg"),
    imageMargin: 5,
    name: "Vitamin Well",
    price: 15000,
    weblink: "https://www.vitaminwell.fi/vitamin-well/",
	description: "Nauti kylmänä hiilihapotettu ja hedelmäsokerilla makeutettu vitamiinijuoma!",
	webname: "Vitamin Wellin sivuille"
  },
  {
    image: require("./fressi.jpg"),
    imageMargin: 10,
    name: "Fressi kertalippu",
    price: 10000,
    weblink: "http://www.fressi.fi/kokeile-3-paivaa-veloituksetta/",
	description: "Kokeile Fressin palveluita ilmaiseksi missä tahansa toimipisteellä tällä kertalipulla",
	webname: "Fressin sivuille"
  },
  {
    image: require("./nobe.jpg"),
    imageMargin: 0,
    name: "NOBE aloe vera",
    price: 15000,
    weblink: "http://nobealoevera.com/suomi/",
	description: "Nauti kylmänä ja ravistettuna NOBE aloe vera -juoma! Sisältää mehukkaita aloe vera palasia ja 100% luonnollisia väriaineita ja aromeja",
	webname: "NOBEn sivuille"
  },
  {
    image: require("./helsingin-kehostudio.jpg"),
    imageMargin: 0,
    name: "Helsingin Kehostudio hieronta",
    price: 10000,
    weblink: "http://www.helsinginkehostudio.fi/",
	description: "Lunasta 15€ arvoinen lahjakortti Helsingin Kehostudion hierontaan! Etu käytettävissä arkisin 8 - 20",
	webname: "Helsingin Kehostudion sivuille"
  },
  {
    image: require("./nocco.jpg"),
    imageMargin: 0,
    name: "NOCCO",
    price: 15000,
    weblink: "https://nocco.fi/tuotteet/",
	description: "Raikas marjoille tai hedelmille maistuva hiilihapotettu juoma, joka sisältää kofeiinia ja kuutta eri vitamiinia",
	webname: "NOCCOn sivuille"
  },
];

class MainView extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 120, backgroundColor: 'white', elevation: 4}}>
          <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 15, marginTop: '1%'}}>
            Pistemääräsi:
          </Text>
          <Text style={{textAlign: 'center', color: '#333', fontWeight: 'bold', fontSize: 20}}>
           {this.props.points} p
          </Text>
     
      <View style={{marginBottom: '0%', marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
        <Button
          onPress={ () => {this.props.navigator.push({id: 'Break'});}}
          title='Tauko! Näytä pömpelini kartalla'
          color='#8BC34A'
        />
      </View>
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
      <TouchableHighlight key={i} underlayColor="#8BC34A" onPress={() => this.props.navigator.push({id: 'Product', product: product})}>
        <View style={{margin: 10, marginBottom: 0, height: itemHeight, backgroundColor: 'white', elevation: 30, flex: 1, flexDirection: 'row'}}>
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

export default connect(
  state => ({ points: state.points }),
)(MainView);

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
