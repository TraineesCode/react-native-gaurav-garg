import React, { Component } from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import styles from './styles.js'

class CustomCheckBox extends Component{
  constructor(props){
    super(props);
    this.state={
      selected:false,
    }
  }

  onChange() {

     var temp=!this.state.selected;
     this.setState({
          selected: !this.state.selected
      });
     if(temp){

     this.props.onCheck(this.props.content);
       }
     if(!temp){
     this.props.onUnCheck(this.props.content);
       }


  }
  render(){
    return(
      <TouchableOpacity  underlayColor="white" onPress={()=>this.onChange()}>
      <View style={styles.containerStyle}>
            <View style={styles.checkboxStyle}>
             {this.state.selected?<Text style={{fontSize: 18,color:'white'}}>&#10004;</Text>:<Text style={{fontSize: 30 ,color:'white'}}></Text>}
            </View>
            <View style={styles.labelStyle}>
            <Text style={{fontSize:22,}}>{this.props.content}</Text>
          </View>
      </View>
      </TouchableOpacity>
    )
  }
}

export default CustomCheckBox
