import { View, Text,StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EntyPo from 'react-native-vector-icons/Entypo'


const Otp = ({navigation}) => {
    const[text,setText]=useState('')
    const[text2,setText2]=useState('')
    const[text3,setText3]=useState('')
    const[text4,setText4]=useState('')
    const[text5,setText5]=useState('')
    const[text6,setText6]=useState('')
  return (
    <View>
      <View style={styles.EntyPo}>
        <View style={styles.chav}>
          <TouchableOpacity onPress={ ()=>navigation.navigate('Login')}>
          <Image source={require('./Image/NextButton.png')} />
        </TouchableOpacity>
        </View>
            <Image source={require('./Image/Group1909.png')} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./Image/Group2.png')} /> 
        </View>
        <Text style={{fontSize:20,color:'blue',marginLeft:13,textTransform:'uppercase',marginTop:18}}>Otp</Text>
        <Text style={{fontSize:30,color:'black',marginLeft:15,fontWeight:'600'}}>Almost there</Text>
        <Text style={{fontSize:18,color:'black',marginHorizontal:13,fontWeight:'500'}}>Please enter the 6-digit code sent to your mobile for verification</Text>
       <View style={{flexDirection:'row'}}>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='7' maxLength={1} value={text} onChangeText={(text)=>setText(text)}/>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='0' maxLength={1} value={text2} onChangeText={(text2)=>setText2(text2)}/>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='0' maxLength={1} value={text3} onChangeText={(text3)=>setText3(text3)}/>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='0' maxLength={1} value={text4} onChangeText={(text4)=>setText4(text4)}/>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='0' maxLength={1} value={text5} onChangeText={(text5)=>setText5(text5)}/>
        <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='0' maxLength={1} value={text6} onChangeText={(text6)=>setText6(text6)}/>   
       </View>
       <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',marginHorizontal:20,padding:12,borderRadius:10,marginTop:20}}
       onPress={()=>navigation.navigate('Guest_Dashboard')}>
        <Text style={{fontSize:21,textAlign:'center',color:'white'}}> Verify </Text>
       </TouchableOpacity>
       <View style={{flexDirection:'row',marginTop:37,marginHorizontal:45}}>
        <Text style={{fontSize:16,color:'black'}}>didn't recive any code?</Text>
        <TouchableOpacity >
            <Text style={{fontSize:17,marginLeft:11,color:'blue',}}>Resend angain </Text>
        </TouchableOpacity>
       </View>

       <Text style={{fontSize:18,marginLeft:11,color:'black',marginTop:10,textAlign:'center'}}> Request new code in 60sec </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    EntyPo:{
        flexDirection:'row',
        justifyContent:'flex-end',
        
      },
      chav:{
        width:30,
        height:30,
        borderRadius:15,
        position:'absolute',
        top:13,
        left:12,
      },
      TextInput:{
        width:50,
        height:50,
        borderRadius:10,
        fontSize:20,
        borderWidth:1,
        borderColor:'black',
        textAlign:'center',
        color:'black',
        marginLeft:12,
        marginTop:20,
       
      }
    })

export default Otp;