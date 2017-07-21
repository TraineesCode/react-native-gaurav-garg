import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;
const ratioX = x < 375 ? (x < 320 ? 0.65 : 0.85) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.65 : 0.85) : 1 ;
const base_unit = 16;
const unit = base_unit * ratioX;
function em(value) {
 return unit * value;
}

module.exports = StyleSheet.create({
  displaySize: {
      width: x, height: y
  }
  ,
  homeHeading: {
      fontSize: em(2.4), fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: '25%'
  }
  ,
  homeBackground: {
      flex: 1, backgroundColor: 'rgba(0,0,0,.7)', padding: 15
  }
  ,
  homeText: {
      fontSize: em(1.4), marginTop: '15%', color: 'white'
  }
  ,
  container2:{flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',},
  homeSubText: {
      fontSize: em(1.4), color: 'white'
  }
  ,
  inputBox: {
      height: '10%', padding: 10
  }
  ,
  container: {
      flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20
  }
  ,
  activityIndicator: {
      flex: 1, justifyContent: 'center', alignItems: 'center', height: 150
  }
  ,
  containerLayout: {
      flex: 1, flexDirection: 'column', backgroundColor: '#6B1C5E',
  }
  ,
  basic: {
      margin: 3, marginTop: 12, padding: 8, backgroundColor: '#F7F6F8', borderRadius: 1
  }
  ,
  titleText: {
      fontSize: 25,
  }
  ,
  homePage: {
      flex: 1, backgroundColor: '#6B1C5E', padding: 10,
  }
  ,
  homebutton: {
      marginTop: '10%', backgroundColor: 'white', padding: 10
  }
  ,
  skillbutton: {
      padding: 5, width: 80, marginTop: '4%', marginBottom: '50%', marginRight: '4%', alignSelf: 'flex-end', backgroundColor: 'white'
  }
  ,
  levelbutton: {
      padding: 5, width: 80, marginRight: '4%', marginBottom: '4%', alignSelf: 'flex-end', backgroundColor: 'white'
  }
  ,
  scorebutton: {
      padding: 5, marginTop: '10%', marginBottom: '4%', alignSelf: 'flex-end', backgroundColor: 'white'
  }
  ,
  questionbutton: {
      padding: 5, width: 80, marginTop: '5%', marginBottom: '10%', alignSelf: 'flex-end', backgroundColor: 'white', borderRadius: 10
  }
  ,
  scrollStyle: {
      marginTop: '5%', backgroundColor: '#6B1C5E'
  }
  ,
  widthStyle: {
      height: 14, margin: 3, backgroundColor: '#282828', borderRadius: 7,
  }
  ,
  skillPage: {
      flex: 1, backgroundColor: '#6B1C5E', padding: 10,
  }
  ,
  levelPage: {
      flex: 1, flexDirection: 'column', backgroundColor: '#6B1C5E', padding: 10, paddingBottom: 0,
  }
  ,
  questionPage: {
      flex: 1, flexDirection: 'column', backgroundColor: '#6B1C5E', padding: 5,
  }
  ,
  questionComponent: {
      backgroundColor: '#6B1C5E'
  }
  ,
  buttonComponent: {
      marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between',
  }
  ,
  scorePage: {
      flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch', padding: 10,
  }
  ,
  scoreText: {
    fontSize: 25,color:'white'
  }
  ,
  containerStyle: {
      flexDirection: 'row', marginLeft: 14, marginRight: 35, alignItems: 'center'
  }
  ,
  labelStyle: {
      backgroundColor: '#F7F6F8', margin: 5, width: '100%', padding: 7, paddingLeft: 15, paddingRight: 15, borderRadius: 14,
  }
  ,
  checkboxStyle: {
      width: 26, height: 26, borderWidth: 2, borderColor: '#ddd',
  }
  ,
  radiobuttonStyle1: {
      width: 26, height: 26, borderWidth: 2, borderColor: '#ddd', borderRadius: 50
  }
  ,
  radiobuttonStyle2: {
      width: 26, height: 26, borderWidth: 2, borderColor: '#ddd', borderRadius: 50, backgroundColor: '#F7F6F8'
  }
  ,
  statusBar: {
      height: 20, backgroundColor: '#F7F6F8', borderRadius: 6, display: 'flex', flexDirection: 'row', marginBottom: 1,
  }
  ,

});
