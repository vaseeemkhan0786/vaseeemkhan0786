import { Image, Linking, StyleSheet, Text, TouchableOpacity, View,Alert, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import EntyPo from 'react-native-vector-icons/Entypo'
import CustomTextInput from './CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [student,setStudent] =useState(['']);
  const [error,setError]=useState('');
  const{width,height}=Dimensions.get('window');

  const submit=()=>{
    if(phone.length==10 && password.length>=6 && password.length<=15){
      navigation.navigate('Intro')
      setError(' can,t valid number')
     // Alert.alert("successfull login  ")
    }else{
      // return Alert.alert("please fill correct field ");
    }
  } 
  useEffect( ()=>{
     const login= async()=>{
      try {
        const data= await fetch('https://jsonplaceholder.typicode.com/users')
        const Man= await data.json();
          setStudent(Man)
          console.log(Man)
      // const error=console.log("error")
        }
      catch (error) {
        console.log('error log');
      }
     }
     login();
     
  },[])
  const Hello=async()=>{
    try {
       await AsyncStorage.setItem('phone',JSON.stringify('data'));
       await AsyncStorage.setItem('password',JSON.stringify('data'));
    } catch (error) {
      console.log('error')
    }
  }
   const getData=async()=>{
    try {
    const name = await AsyncStorage.getItem(phone);
    const pass = await AsyncStorage.getItem(password);
     const names=JSON.parse(name)
      console.log(names);
      console.log(password);
    } catch (error) {
      console.log('error')
    }
  }
  return (
    <View style={{backgroundColor:'rgb(255,255,255)',height}}>
      <View style={styles.EntyPo}>
        <View style={styles.chav}>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Image source={require('./Image/NextButton.png')} />
          </TouchableOpacity>
        </View>
        <Image source={require('./Image/Group1909.png')} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./Image/Group2.png')} />
      </View>
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={{ fontSize: 28, color: 'black', marginLeft: 7, fontWeight: '700' }}> Welcome back </Text>
        <Text style={{ fontSize: 17, color: 'black', marginLeft: 13, }}>Login to access your account </Text>
      </View>
      
      <CustomTextInput
        style={[styles.input, { paddingLeft: 60 }]}
        iconSources={require('./Image/indiaFlag.jpg')}
        placeholder='Please Enter Number'
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        iconSource={require('./Image/smartphone.png')}
        keyboardType={'number-pad'}
      />

      <CustomTextInput
        style={[styles.input]}
        secureTextEntry={true}
        placeholder='Enter Your Password' value={password}
        onChangeText={(password) => setPassword(password)}
        iconSource={require('./Image/lock.png')}
      />
      {
        error&&<Text style={{color:'red'}}>{error}</Text>
      }
      <View style={styles.forgetTouchView}>
        <CheckBox
          disbled={false}
          value={checked}
          onValueChange={(checked) => setChecked(checked)}/>
        <Text style={styles.remmaber}>Remember me</Text>
        <TouchableOpacity style={styles.forgetTouch}>
          <Text style={styles.forget} >Forget Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.otpTouchable}
        onPress={submit} 
        // onPressIn={Hello} 
        >
        <Text style={styles.loginTouchable}>Login</Text>
      </TouchableOpacity  >
      <Text style={{ fontSize: 17, textAlign: 'center', marginTop: 12 }}> OR continue with </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.linkTouch}
          onPress={() => { Linking.openURL('https://www.google.com/') }}>
          <Image source={require('./Image/Googleauth.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkTouch}
          onPress={() => { Linking.openURL('https://www.facebook.com/') }}>
          <Image source={require('./Image/Facebookauth.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 17, color: 'black', marginLeft: 20, marginTop: 42, }} > don't have an account </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.signup}>sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  EntyPo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  input: {
    height: 50,
    width: '92%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 15,
    borderRadius: 10,
    fontSize: 20,

  },
  chav: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 13,
    left: 12,
  },

  forgetTouchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 6
  },
  remmaber: {
    fontSize: 16,
    color: 'black',
    marginRight: 100,
    textDecorationLine: 'underline',
    marginTop: 4
  },
  otpTouchable:{
      backgroundColor: 'rgb(3, 27, 163)',
      marginHorizontal: 20, padding: 12, 
      borderRadius: 10, 
      marginTop: 13
 },
  loginTouchable:{ 
    fontSize: 20, 
    color: 'white', 
    marginLeft: 10, 
    textAlign: 'center' 
},
login:{ 
    fontSize: 20,
    color: 'rgb(70, 207, 242)',
    marginLeft: 13, 
    textTransform: 'uppercase',
    marginTop: 18 
    },
  signup:{ 
    fontSize:20, 
    fontWeight:'500',  
    color: 'black', 
    marginLeft: 6,
    marginTop: 40, 
},
  forget: {
    fontSize: 17,
    color: 'rgb(70, 207, 242)',
    marginRight: 13,
    textDecorationLine: 'underline',

  },
  linkTouch: {
    marginTop: 17,
    borderColor: 'blue',
    marginLeft: 25,
  },

})

export default Login
