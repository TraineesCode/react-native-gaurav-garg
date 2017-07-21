import React, { Component } from 'react';
import { Text, View,Image,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import styles from './styles.js'
import CustomCheckBox from './CustomCheckBox.js'

class SkillPage extends Component{
constructor(props){
  super(props);
  this.state={skillData:[],spin:true}
}

componentWillMount=()=>{
  this.props.mainProp.resetState();
  fetch('http://192.168.2.15:8082/skills/all') .then((response) => response.json())
   .then((responseJson) => {
     this.setState({skillData:responseJson,spin:false})
   })  .catch(function(){
       this.setState({spin:false})
       alert("Cannot connect to server")}.bind(this))
 }
    render() {

      return(

        <Image  style={styles.displaySize} source={require('../background.jpg')}  >
        <View  style={styles.SkillPage}>
        <View style={[styles.basic]}>
        <Text style={styles.titleText}> &#9724; Choose from the skills below.</Text>
        </View>
        <ScrollView style={{padding:10}}>
        {this.state.skillData.map((r)=>{return <CustomCheckBox key={r.skill} onCheck={this.props.mainProp.onCheckSkill.bind(this.props.mainProp)} onUnCheck={this.props.mainProp.onUnCheckSkill.bind(this.props.mainProp)} content={r.skill} />})}

        </ScrollView>
          <View style={styles.skillbutton}>
        <TouchableOpacity  underlayColor="white" disabled={this.props.mainProp.state.skill.length<1} onPress={()=>this.props.mainProp.setPageNo(3)}>

        <Text style={{fontSize: 25, alignSelf:'center'}}>Next</Text>


        </TouchableOpacity>
        </View>
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
      </Image>

        )
    }
}
export default SkillPage
