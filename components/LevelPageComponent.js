import React, { Component } from 'react';
import { ListView, Text, View,Image,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';;
import styles from './styles.js'
import RadioButton from './RadioButton.js'
class LevelPageComponent extends Component{
    constructor(props){
      super(props);
      this.state={levels:[],count:0,levelsLocked:[],spin:true}
      var a=encodeURIComponent(this.props.skillProp)
      fetch('http://192.168.2.15:8082/questions/skills?skill='+a) .then((response) => response.json())
       .then((responseJson) => {
         this.setState({levels:responseJson,spin:false})
       })
       .catch(function(){
         this.setState({spin:false})
         alert("Cannot connect to server")}.bind(this))
     fetch('http://192.168.2.15:8082/response/count?user='+this.props.mainProp.state.username+'&skill='+a) .then((response) => response.json())
      .then((responsem) => {

        this.setState({count:responsem})
      })
      .catch(function(){
        alert("Cannot connect to server")}.bind(this))



    }

    getStatus(level){
      var temp=this.props.mainProp.state.level;
      status=false;
      for(var i=0;i<temp.length;i++){
        if(temp[i].skillname==this.props.skillProp){
          if(temp[i].levelname==level)
          status=true;
        }
      }
      return status;
    }
    render() {


      return(
        <View style={{padding:10}}>
        <View style={styles.basic}>
        <Text style={styles.titleText}> &#9724; For {this.props.skillProp}</Text>
        </View>
        <ScrollView>
        {this.state.levels.map((r,index)=>{
        var status=true;

        if(index==0){

          status=false;
        }
        
        if(index<=this.state.count){

          status=false;
        }
        return <RadioButton key={r.level}
         statusProp={this.getStatus.bind(this)}
         disabled={status}
         onCheck={()=>this.props.mainProp.onCheckLevel(this.props.skillProp,r.level)} onUnCheck={()=>this.props.mainProp.onUnCheckLevel(this.props.skillProp,r.level)}
         content={r.level} />})}
        </ScrollView>
        <View style = {styles.container}>
          {(this.state.spin)?
        <ActivityIndicator
           animating = {true}
           color = 'grey'
           size = "large"
           style = {styles.activityIndicator}
        />:null}
     </View>
      </View>

        )

    }
}


export default LevelPageComponent
