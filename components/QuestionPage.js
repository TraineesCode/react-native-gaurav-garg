import React, { Component } from 'react';
import {Image ,View,Text,TouchableOpacity} from 'react-native';
import styles from './styles.js'
import QuestionPageComponent from './QuestionPageComponent.js'

class QuestionPage extends Component{
    constructor(props){
      super(props);
      this.state={skillArray:[],skill:0,page:1}
    }

    increaseSkill=()=>{
      if(this.state.skill+1<this.state.skillArray.length){
        this.setState({skill:this.state.skill+1});}
      else{
        this.setState({page:2})
      }
    }
    componentWillMount(){

       this.props.mainProp.state.level.map(function(level){
        this.state.skillArray.push(<QuestionPageComponent key={level.skillname} thisRef={this} levelProp={level} mainProp={this.props.mainProp} />)}.bind(this))
    }
    render(){

      return(
        <Image  source={require('../background.jpg')} style={styles.displaySize} >
        {(this.state.page==1)?this.state.skillArray[this.state.skill]:null}

          {(this.state.page==2)
            ?<View  style={styles.homeBackground}>
            <Text style={styles.homeHeading}>Quiz Completed</Text>

            <TouchableOpacity  underlayColor="white" onPress={()=>this.props.mainProp.setPageNo(2)}>
            <Text style={{fontSize: 30, color:'white',marginTop:'15%',alignSelf:'center',}}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity  underlayColor="white" onPress={()=>this.props.mainProp.setPageNo(1)}>
            <Text style={{fontSize: 30, color:'white',marginTop:'15%',alignSelf:'center',}}>Log Out</Text>
            </TouchableOpacity>
          </View>:null}
        </Image>
        )
            }
    }

export default QuestionPage
