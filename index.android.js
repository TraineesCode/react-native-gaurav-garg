
/****

Internship Project
React Native Quiz App
Gaurav garg

***/
import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';

import HomePage from './components/HomePage.js'
import SkillPage from './components/SkillPage.js'
import LevelPage from './components/LevelPage.js'
import QuestionPage from './components/QuestionPage.js'
import styles from './components/styles.js'



export default class ReactNativeQuizApp extends Component {
  constructor(props){
    super(props);
    this.state={PageNo:1,QNo:1,skill:[],level:[],username:'',password:''}
  }
  setUserDetails(name,pwd){
    this.setState({username:name,password:pwd})
  }
  resetState(){

    this.setState({skill:[],level:[]})
  }
  onCheckSkill(skill){
   var temp=this.state.skill;
   temp.push(skill);
   this.setState({skill:temp});
  }
  onUnCheckSkill(skill){
    var index = this.state.skill.indexOf(skill);
    if (index > -1) {
    this.state.skill.splice(index, 1);
    }
    var temp=this.state.skill;
    this.setState({skill:temp});
  }
  onCheckLevel(skill,level){
   var temp=this.state.level;
   var flag=true;
   for(var i=0;i<temp.length;i++){
     if(temp[i].skillname==skill){
       temp[i].levelname=level;
       flag=false;
     }
   }
   if(flag){
   temp.push({skillname:skill,levelname:level});
    }
   this.setState({level:temp});
  }
  onUnCheckLevel(skill,level){
    var index=-1;
    var temp=this.state.level;
    for(var i=0;i<temp.length;i++){
      if(temp[i].skillname==skill){
       index=i;
      }
    }
    if (index > -1) {
    this.state.level.splice(index, 1);
    }
    var temp=this.state.level;
    this.setState({level:temp});
  }
  setLevel(no){
    this.setState({level:no})
  }
  setPageNo(no){
    this.setState({PageNo:no})
  }
  setQNo(no){
    this.setState({QNo:no})
   }

  render() {
      return(
        <View style={{flex:1,backgroundColor:'black'}}>
        {(this.state.PageNo==1)?<HomePage mainProp={this}/>:null}
        {(this.state.PageNo==2)?<SkillPage mainProp={this}/>:null}
        {(this.state.PageNo==3)?<LevelPage mainProp={this}/>:null}
        {(this.state.PageNo==4)?<QuestionPage mainProp={this}/>:null}
      </View>
      )
    }
}



AppRegistry.registerComponent('ReactNativeQuizApp', () => ReactNativeQuizApp);
