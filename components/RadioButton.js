import React, { Component } from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import styles from './styles.js'


class RadioButton extends Component{
  constructor(props){
    super(props);
    this.state={
      selected:false,
    }
  
  }
  onChange() {

     var temp=!this.state.selected;
     if(temp){
     this.props.onCheck(this.props.content);
       }
     if(!temp){
     this.props.onUnCheck(this.props.content);
       }
  }

  render(){
    return(
      <TouchableOpacity  disabled={this.props.disabled} underlayColor="white" onPress={()=>this.onChange()}>
      <View style={styles.containerStyle}>
            <View style={this.props.statusProp(this.props.content)?styles.radiobuttonStyle2:styles.radiobuttonStyle1}>
            </View>
            <View style={styles.labelStyle}>
            <Text style={{fontSize:20,fontWeight: 'bold'}}>{this.props.content}

            </Text>
            </View>
      </View>
      </TouchableOpacity>
    )
  }
}
export default RadioButton
