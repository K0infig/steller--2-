import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, Platform, ImageBackground, TouchableOpacity, Image} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
      return(
        <View style={styles.container}> 
        <SafeAreaView  style ={ styles.androidView} />
        <ImageBackground source={require('../assets/stars.gif')} style={styles.bgImage}>
        <View style={styles.titleBar}>
          <Text style ={styles.titleText}> ISS Tracker App</Text>
        </View>

        <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("SpaceCrafts")}}>
          <Text style ={styles.buttonText} > SpaceCrafts </Text>
          
          <Image  source={ require('../assets/space_crafts.png')} style={styles.iconImage}/ >
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("StarMap")}}>
          <Text style ={styles.buttonText} > StarMap </Text>
          
          <Image  source={ require('../assets/star_map.png')} style={styles.iconImage}/ >
        </TouchableOpacity>
          

        <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("DailyPic")}}>
          <Text style ={styles.buttonText} > Daily Pictures </Text>
          
          <Image  source={ require('../assets/daily_pictures.png')} style={styles.iconImage}/ >
        </TouchableOpacity>
          
        </ImageBackground>
        </View>
          
      )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems: "center"

  },
  titleText:{
    fontWeight:"bold",
    fontSize:40,
    color:"white"

  },
  androidView:{
    marginTop: Platform.OS == "android"? StatusBar.currentHeight : 0
  },
  bgImage:{
    flex:1,
    resizeMode:'cover'
  },
  routeCard:{
    flex:0.25,
    borderRadius: 30,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
    backgroundColor:"white"
  },
  buttonText:{
    fontSize:35,
    fontWeight:"bold",
    padding:10,
    color:"blue",
    marginTop:75
  },
  knowMore:{
    color:"red",
    paddingLeft:30,
    fontSize:15
  },
  bgDigit:{
    position:'absolute',
    color: "rgba(183,183,183,0.5)",
    fontSize:120,
    right:20,
    bottom: -15,
    zIndex: -1
  },
  iconImage:{
    positon:'absolute',
    height:200,
    width:200,
    resizeMode:"contain",
    top: -250,
    right: 20
  }
});
