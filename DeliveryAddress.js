import { Image, StyleSheet, Text,View,TouchableOpacity,Dimensions } from 'react-native'
import React, { useState } from 'react'


const DeliveryAddress = ({navigation}) => {
  const{width,height}=Dimensions.get('window');
  const [clicked,setClicked]=useState(false);
  const [clicked2,setClicked2]=useState(true);
  const Click=()=>{
    setClicked(true)
    setClicked2(false)
    
  }
  const Click2=()=>{
      setClicked2(true)
      setClicked(false)
  }
  useState( ()=>{
    clicked? <Image style={{borderRadius:10,marginLeft:8}} source={require('./Image/check-circle.png')} />:null
  })
  return (
    <View style={{backgroundColor:'rgb(255,255,255)',height:height}}>
         <View style={styles.EntyPo}>
        <View style={styles.chav}>
        <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
        <Image source={require('./Image/NextButton.png')} />
        </TouchableOpacity>
        </View>
        <View >
       <Text style={styles.service}>Select delivery address</Text>
       </View>
       </View>
       <TouchableOpacity onPress={Click2}>
       <View style={[styles.address,{borderColor:clicked2?'blue':'grey'}]}> 
       
       <Image style={{width:35,height:35,backgroundColor:'blue',borderRadius:5}} source={require('./Image/home.png')} />
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'black'}}>Home</Text>
        <Text style={{marginLeft:10,fontSize:18,}}>Lot 5. 11 Level 5 1 Teck Park, {"\n"}
             Bandar Utama, Petaling Jaya,{"\n"}
              Selangor, 47800, Malaysia</Text>
        </View>
        {
          clicked2 ? <Image style={{borderRadius:10,marginLeft:8}} source={require('./Image/check-circle.png')} />:null
        }
       
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={Click}>
       <View style={[styles.address,{borderColor:clicked?'blue':'grey'}]}>
        <Image style={{width:35,height:35,backgroundColor:'blue',borderRadius:5}} source={require('./Image/home2.png')} />
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'black'}}>Office</Text>
        <Text style={{marginLeft:10,fontSize:18,}}>Lot 5. 11 Level 5 1 Teck Park,{"\n"}
             Bandar Utama, Petaling Jaya,{"\n"}
              Selangor, 47800, Malaysia</Text>
        </View>
        {
          clicked ? <Image style={{borderRadius:10,marginLeft:8}} source={require('./Image/check-circle.png')} />:null
        }
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={styles.TouchableOpacityNext}
        onPress={()=>navigation.navigate('Payment_Method')}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    EntyPo:{
        flexDirection:'row',
        marginTop:18,
      },
      chav:{
        width:30,
        height:30,
        borderRadius:15,
        marginLeft:15,
      },
      service:{
        marginLeft:48,
        fontSize:22,
        color:'black',
        fontWeight:'400',
        textTransform:'capitalize',
        fontWeight:'700'
      },
      address:{
        flexDirection:'row',
        marginTop:35,
        borderWidth:1,
        padding:15,
        borderRadius:10,
        marginHorizontal:20
    },
    TouchableOpacityNext:{
      marginHorizontal:20,
      backgroundColor:'rgb(5, 11, 127)',
     // marginTop:18,
      padding:11,
      borderRadius:12,
      position:'absolute',
      bottom:20,
      left:0,
      right:0

     },
     next:{
       color:'white',
       textAlign:'center',
       fontSize:20,
     }
})

export default DeliveryAddress

