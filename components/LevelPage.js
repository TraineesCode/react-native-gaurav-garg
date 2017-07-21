import React, { Component } from 'react';
import {  AppRegistry, StyleSheet,ListView, Text, View,Button,Image,
         TouchableHighlight,TouchableOpacity,ScrollView,AsyncStorage, ActivityIndicator} from 'react-native';
import styles from './styles.js'
import LevelPageComponent from './LevelPageComponent.js'

class LevelPage extends Component{
  state={spin:true}
  onNext=()=>{
    if(this.props.mainProp.state.level.length==this.props.mainProp.state.skill.length)
      {this.props.mainProp.setPageNo(4)}
  }
  render(){
    return(

      <Image source={require('../background.jpg')} style={styles.displaySize} >
      <ScrollView style={{flex:1,marginBottom:'10%'}}>
      <View style={styles.basic}>
      <Text style={styles.titleText}> &#9724; Choose your level</Text>
      </View>
      {this.props.mainProp.state.skill.map(function(skill){
        return <LevelPageComponent mainProp={this.props.mainProp} key={skill} skillProp={skill}/>
      }.bind(this))}

      <View style={styles.levelbutton}>
      <TouchableOpacity  underlayColor="white" onPress={this.onNext}>
      <Text style={{fontSize: 25, alignSelf:'center'}}>Next</Text>
      </TouchableOpacity>
       </View>

      </ScrollView>

      </Image>

  )
  }
}

export default LevelPage
