import React, { Component } from 'react';
import {Text, View,TouchableOpacity,ActivityIndicator} from 'react-native';
import styles from './styles.js'

class ScorePage extends Component{
  constructor(props){
    super(props)
    
  }
componentWillUnmount(){

    fetch('http://192.168.2.15:8082/response/insert',{
            method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body:JSON.stringify({userName: this.props.mainProp.state.username,skill:this.props.QPCProp.state.skillName,
              level:this.props.QPCProp.state.levelName, score:this.props.QPCProp.state.score,
              optionResponseSet:this.props.QPCProp.state.optionResponseSet,completed:this.props.QPCProp.state.completed
            })
          })
        .then((response) => response.json())
        .then((responseJson) => {

          if(responseJson==true){

          }
          else{
               alert("Result could not be submitted")
            }
         })
         .catch(function(){

           alert("Cannot connect to server")}.bind(this))
     }

render() {

        return(
        <View >
          <View style={styles.basic}>
          <Text style={[styles.titleText,{alignSelf:'center'}]}> Score Card</Text>
          </View>
          <View style = {styles.container2}>
            <Text style={styles.scoreText}> Skill :</Text>
            <Text style={styles.scoreText}>{this.props.QPCProp.state.skillName}</Text>
        </View>
        <View style = {styles.container2}>
          <Text style={styles.scoreText}> Level :</Text>
          <Text style={styles.scoreText}>{this.props.QPCProp.state.levelName}</Text>
      </View>
      <View style = {styles.container2}>
        <Text style={styles.scoreText}> Total Questions :</Text>
        <Text style={styles.scoreText}>{this.props.QPCProp.state.QuestionArray.length}</Text>
    </View>
    <View style = {styles.container2}>
      <Text style={styles.scoreText}> Correct :</Text>
      <Text style={styles.scoreText}>{this.props.QPCProp.state.score}</Text>
  </View>
  <View style = {styles.container2}>
    <Text style={styles.scoreText}> Score :</Text>
    <Text style={styles.scoreText}>{this.props.QPCProp.state.score}</Text>
</View>


          <TouchableOpacity  underlayColor="white"  onPress={()=>this.props.increaseSkill()}>
              <View style={styles.scorebutton}>
          <Text style={{fontSize: 25, alignSelf:'center'}}>Continue</Text>

          </View>
          </TouchableOpacity>


        </View>
        )

    }

}
export default ScorePage
