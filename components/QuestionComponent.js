import React, { Component } from 'react';
import { AppRegistry, StyleSheet,
         ListView, Text, View,Button,Image,
         TouchableHighlight,TouchableOpacity,ScrollView,AsyncStorage} from 'react-native';
import styles from './styles.js'
import CustomCheckBox from './CustomCheckBox.js'

import ViewTransformer from 'react-native-view-transformer';

class QuestionComponent extends Component{
    constructor(props){
     super(props);
    var correctAnswer=[]
     for(var i=0;i<this.props.qProp.optionSet.length;i++){
           if(this.props.qProp.optionSet[i].correct)
             {
             correctAnswer.push(this.props.qProp.optionSet[i].optionText)

           }

     }
      this.state={QId:this.props.qProp.qid,response:[],correctAnswer:correctAnswer}

    }

    onCheck=(option)=>{
     var temp=this.state.response;
     temp.push(option);
     this.setState({response:temp})

    }
    onUnCheck=(option)=>{
      var index = this.state.response.indexOf(option);
      if (index > -1) {
      this.state.response.splice(index, 1);
      }
      var temp=this.state.response;
      this.setState({response:temp});

     }

    componentWillUnmount=()=>{

    var check=1;

    for(var i=0;i<this.state.response.length;i++)
        {
          var a={qid : this.props.qProp.qid,optionText:this.state.response[i]}
          this.props.QPCProp.addToResponseArray(a);
        }


    if(this.state.correctAnswer.length==this.state.response.length){
      for(var i=0;i<this.state.correctAnswer.length;i++){
        var index=this.state.response.indexOf(this.state.correctAnswer[i])
            if(index<0){
            check=0
          }
        }
      }
      else{
     check=0}

    this.props.QPCProp.setScore(check);
  }
    render() {

      return(
        <ScrollView  >
           <View style={styles.basic}>
           <Text style={styles.titleText}>Q {this.props.qProp.questionText}</Text>
           </View>
           {(this.props.qProp.image)?
           <ViewTransformer style={{height:300,width:400}}>
               <Image  resizeMode='contain' source={{uri: this.props.qProp.image}} style={{height:300,width:400}} />
           </ViewTransformer>:null}

           <View style={{marginTop:'5%'}} >
           {this.props.qProp.optionSet.map((r)=>{
           return <CustomCheckBox
           onCheck={this.onCheck} onUnCheck={this.onUnCheck} key={r.optionText}  content={r.optionText} />})}
           </View>
           <View style={styles.questionbutton}>

           <TouchableOpacity  underlayColor="white"  disabled={(this.state.response.length<1)} onPress={()=>{this.props.next()}}>
           <Text style={{fontSize: 25, alignSelf:'center'}}>Next</Text>
           </TouchableOpacity>
         </View>
      </ScrollView>
        )

    }

}
export default QuestionComponent
