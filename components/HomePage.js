import React, { Component } from 'react';
import { Text, View,Image,TextInput,ActivityIndicator,
         TouchableOpacity,ScrollView,BackHandler} from 'react-native';;
import styles from './styles.js'
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

class HomePage extends Component{
constructor(props){
super(props);
this.state={username:'',password:'',page:1,
           signupUsername:'',signupPassword1:'',
           signupPassword2:'',spin:false}
}
 onLogin=()=>{
   if(this.state.username.length !=0 & this.state.password.length != 0){
       this.setState({spin:true})
       fetch('http://192.168.2.15:8082/users/q',{
               method: 'POST',
               headers: {'Accept': 'application/json','Content-Type': 'application/json'},
               body: JSON.stringify({userName: this.state.username,password: this.state.password })
             })
           .then((response) => response.json())
           .then((responseJson) => {
             if(responseJson==true){
              this.setState({spin:false})
              this.props.mainProp.setUserDetails(this.state.username,this.state.password);
              this.props.mainProp.setPageNo(2)}
             else{this.setState({spin:false})
                  alert("Username does not exist")
               }
            })
            .catch(function(){
              this.setState({spin:false})
              alert("Cannot connect to server")}.bind(this))
        }
   else {alert("Username and password cannot be blank")}
 }

 onSignUp=()=>{
   if(this.state.signupUsername.length>0 && this.state.signupPassword1.length>0)
   {
       if(this.state.signupPassword1==this.state.signupPassword2 )
           {
             this.setState({spin:true})
             fetch('http://192.168.2.15:8082/users/add', {
               method: 'POST',
               headers: {'Accept': 'application/json','Content-Type': 'application/json',},
               body: JSON.stringify({userName: this.state.signupUsername,password: this.state.signupPassword1})})
               .then((response) =>response.json())
               .then((responseJson) =>{
                 if(responseJson==true){
                      this.redirect();
                      this.setState({page:3,spin:false,signupUsername:'',signupPassword1:'',signupPassword2:''})
                  }
                 else {
                    this.setState({spin:false})
                   alert("This username is already used. Try another.")}
                  })
               .catch(function(){
                 alert("Cannot connect to server")
                 this.setState({spin:false})}.bind(this))
                  }
        else
            { this.setState({spin:false})
              alert("Password don't match.Try Again")}
  }


    else  { this.setState({spin:false})
          alert("Username or password cannot be blank.Try Again")}

  }
redirect=()=>{
setTimeout(function() { this.setState({page: 1}); }.bind(this), 2000);
}


 componentDidMount=()=>{
      BackHandler.addEventListener('hardwareBackPress', function() {
      if (this.state.page==2){
        this.setState({page:1,username:'',password:''})
        return true  }
      return false;
      }.bind(this));
    }

  render(){
    return(<ScrollView>
            <Image  source={require('../home.png')} style={styles.displaySize} >
            {(this.state.page==1)
            ?<View style={styles.homeBackground}>
            <Text style={styles.homeHeading}> Xebia Capability Test</Text>
            <Text style={{fontSize:em(1.4),marginTop:'15%',color:'white'}}> Username</Text>
            <TextInput style={styles.inputBox}
             onChangeText={(uname) => this.setState({username:uname})}
             value={this.state.uname}
             style={{fontSize:em(1.4),color:'#f2f2f2'}}
             underlineColorAndroid='white' />
            <Text style={styles.homeSubText}> Password</Text>
            <TextInput style={styles.inputBox}
              onChangeText = {(pwd) => this.setState({password:pwd})}
              value={this.state.password}
              secureTextEntry={true}
              style={{fontSize:em(1.4),color:'#f2f2f2'}}
              underlineColorAndroid='white' />
            <TouchableOpacity  underlayColor="white" onPress={this.onLogin}>
            <View style={styles.homebutton}>
            <Text style={{fontSize: 30,  alignSelf:'center',}}>Login</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  underlayColor="white" onPress={()=>this.setState({page:2})}>
            <Text style={{fontSize:em(1.4),marginTop:'5%',alignSelf:'flex-end' ,color:'white'}}> Sign Up</Text>
            </TouchableOpacity>
            <View style = {styles.container}>
              {(this.state.spin)?
            <ActivityIndicator
               animating = {true}
               color = 'grey'
               size = "large"
               style = {styles.activityIndicator}
            />:null}
         </View>
          </View>:null}
          {(this.state.page==2)
            ?<View style={styles.homeBackground}>
            <Text style={styles.homeHeading}> Sign Up</Text>
            <Text style={{fontSize:em(1.4),marginTop:'10%',color:'white'}}> Enter Username</Text>
            <TextInput style={{height: '10%',padding:10}}
             onChangeText={(uname) => this.setState({signupUsername:uname})}
             value={this.state.signupUsername}
             style={{fontSize:em(1.4),color:'#f2f2f2'}}
             underlineColorAndroid='white' />
            <Text style={styles.homeSubText}> Enter Password</Text>
            <TextInput style={styles.inputBox}
              onChangeText = {(pwd) => this.setState({signupPassword1:pwd})}
              value={this.state.signupPassword1}
              secureTextEntry={true}
              style={{fontSize:em(1.4),color:'#f2f2f2'}}
              underlineColorAndroid='white' />
              <Text style={styles.homeSubText}> Re-enter Password</Text>
              <TextInput style={styles.inputBox}
                onChangeText = {(pwd) => this.setState({signupPassword2:pwd})}
                value={this.state.signupPassword2}
                secureTextEntry={true}
                style={{fontSize:em(1.4),color:'#f2f2f2'}}
                underlineColorAndroid='white' />
            <TouchableOpacity  underlayColor="white" onPress={()=>this.onSignUp()}>
            <View style={styles.homebutton}>
            <Text style={{fontSize: 30,  alignSelf:'center',}}>Get Started</Text>
            </View>
            </TouchableOpacity>
            <View style = {styles.container}>
              {(this.state.spin)?
            <ActivityIndicator
               animating = {true}
               color = 'grey'
               size = "large"
               style = {styles.activityIndicator}
            />:null}
         </View>
          </View>:null}
          {(this.state.page==3)
            ?<View  style={styles.homeBackground}>
            <Text style={styles.homeHeading}>Sign Up Successfull !</Text>
            <TouchableOpacity  underlayColor="white" onPress={()=>this.setState({page:1})}>
            <Text style={{fontSize: 30, color:'white',marginTop:'15%',alignSelf:'center',}}>Back to Login</Text>
            </TouchableOpacity>
          </View>:null}
          </Image>
 </ScrollView>
        )
    }
}

export default HomePage
