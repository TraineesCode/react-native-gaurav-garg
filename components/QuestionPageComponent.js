import React, { Component } from 'react';
import { Text, View,Image,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import styles from './styles.js'

import QuestionComponent from './QuestionComponent.js'
import ScorePage from './ScorePage.js'
class QuestionPageComponent extends Component{
 constructor(props){
   super(props);
   this.state={QuestionArray:[],QuestionComponentArray:[],optionResponseSet:[],
              score:0,skillName:this.props.levelProp.skillname,levelName:this.props.levelProp.levelname,
              Qno:0,widthStyle2: { width:'0%'},page:0,spin:true,completed:false}
    }
    componentWillMount(){

      var a=encodeURIComponent(this.props.levelProp.skillname);
      var b=encodeURIComponent(this.props.levelProp.levelname);

      fetch('http://192.168.2.15:8082/questions/get-by-skill?skill='+a+'&level='+b) .then((response) => response.json())
       .then((responseJson) => {

         this.setState({QuestionArray:responseJson})
         this.state.QuestionComponentArray=this.state.QuestionArray.map(function(question){
         return <QuestionComponent QPCProp={this} key={question.qid} next={this.increaseQno} qProp={question}/> }.bind(this))

         this.setState({spin:false});

       })
       .catch(function(){
         this.setState({spin:false})
         alert("Cannot connect to server")}.bind(this))
    }
  setScore(no){
    var temp=this.state.score
    temp=temp+no;
    this.setState({score:temp})


    if(temp==this.state.QuestionArray.length){
    
      this.setState({completed:true})
    }
  }

  addToResponseArray=(response)=>{

      var temp=this.state.optionResponseSet;
      temp.push(response);
      this.setState({optionResponseSet:temp})


      }

  increaseQno=()=>{
  if(this.state.Qno <this.state.QuestionComponentArray.length-1){
  var temp=((this.state.Qno+1)/this.state.QuestionComponentArray.length)*100;
  temp= ""+temp+"%";
  this.setState({Qno:this.state.Qno+1,widthStyle2:{width:temp}});
    }
  else{
    this.setState({page:1})
  }
  }
render() {

  return(
    <ScrollView style={{padding:10}}>
        {(this.state.page==0)
         ? <View >
              <View style={styles.statusBar}>
              <View style={[styles.widthStyle,this.state.widthStyle2]}></View>
              </View>
              <View >
                  {(this.state.spin)?
                <View style = {styles.container}>

                <ActivityIndicator
                   animating = {true}
                   color = 'grey'
                   size = "large"
                   style = {styles.activityIndicator}
                />
             </View>:null}
               {this.state.QuestionComponentArray[this.state.Qno]}
              </View>
            </View>
        :null}
        {this.state.page==1?<ScorePage increaseSkill={this.props.thisRef.increaseSkill} mainProp={this.props.mainProp} QPCProp={this}/>:null}
    </ScrollView>
    )
 }}


export default QuestionPageComponent
