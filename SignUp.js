import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import CustomTextInput from './CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation=useNavigation();
    const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name,setName]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [lock,setLock]=useState(false);
  const submit=()=>{
    console.log("SignUp successfull")
  }
  const Hello=()=>{
    setLock(!lock);
    console.log("hello");
  }
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
         <Image style={styles.MainImage} source={require('./Image/Group1909.png')} />
         <Image style={styles.VoiletImage} source={require('./Image/Group2.png')} />
      <Text style={styles.signup}>SignUp</Text>
      <CustomTextInput
        style={[styles.input,{marginTop:20}]}
        placeholder='Please Enter Name'
        placeholderTextColor={'black'}    
        value={name}
        onChangeText={(name) => setName(name)}
      />
       <CustomTextInput
        style={[styles.input,]}
        placeholder='Please Enter Email'
        placeholderTextColor={'black'}
        value={email}
        onChangeText={(email) => setEmail(email)}
        iconSource={require('./Image/smartphone.png')}
      />
       <CustomTextInput
        style={[styles.input]}
        placeholder='Please Enter Number'
        placeholderTextColor={'black'}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        iconSource={require('./Image/smartphone.png')}
      />
       <CustomTextInput
        style={[styles.input]}
        secureTextEntry={true}
        placeholder='Enter Your Password' value={password}
        placeholderTextColor={'black'}
        onChangeText={(password) => setPassword(password)}
        iconSource={require('./Image/lock.png')}
      />
        <CustomTextInput
        style={[styles.input]}
        secureTextEntry={showPassword?true:false}
        placeholder='Enter Confirm Password' value={password}
        placeholderTextColor={'black'}
        onChangeText={(password) => setPassword(password)}
        iconSource={lock?require('./Image/lock.png'):require('./Image/unLock.png')}
        onPress={()=>Hello()}
     />
       <TouchableOpacity style={styles.SignTouchable}
        onPress={submit}>
        <Text style={styles.loginTouchable}>Sign Up</Text>
      </TouchableOpacity  >
      <TouchableOpacity style={styles.otpTouchable}
        onPress={()=>navigation.navigate('Login')} >
        <Text style={styles.loginTouchable}>Login</Text>
      </TouchableOpacity  >
    </View>
  )
}
const styles = StyleSheet.create({
    MainImage:{
        alignSelf:'flex-end'
    },
    VoiletImage:{
      alignSelf:'center'
    },
    signup:{
      marginTop:20,
      textAlign:'center',
      color:'black',
      fontWeight:'500',
      fontSize:23,
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
      SignTouchable:{
        backgroundColor: 'rgb(3, 27, 163)',
        marginHorizontal: 20, padding: 12, 
        borderRadius: 10, 
        marginTop: 13
   },
      otpTouchable:{
        backgroundColor: 'orange',
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
});
export default SignUp
