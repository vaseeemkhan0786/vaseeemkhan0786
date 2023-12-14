import {StyleSheet, Text, View,TouchableOpacity,Image, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Personal_Details = () => {
    const navigation=useNavigation();
    const{width,height}=Dimensions.get('window');
    const personal=[
        {
            id:1,
            image:require('./Image/Group2046.png'),
            user:'user name',
            personName:'John Smith'
        },
        {
            id:2,
            image:require('./Image/mobiles.png'),
            user:'mobile number',
            personName:'+91 1234567890'
        },
        {
            id:3,
            image:require('./Image/email.png'),
            user:'email',
            personName:'johnsmith@gmail.com'
        },
    ]
  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)',height:height}}>
    {/* <ScrollView showsVerticalScrollIndicator={true}> */}
     <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
   <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
     <Image source={require('./Image/NextButton.png')} />
   </TouchableOpacity>
   <Text style={styles.Top}> Personal details</Text>
     </View>
        
       <View style={styles.personView} >
         <Image style={styles.person} source={require('./Image/228.jpg')} />
        {/* <View style={styles.editView}> */}
        <Image style={styles.editCircle} source={require('./Image/Ellipse2051.png')} />
         <Image style={styles.edit} source={require('./Image/eva_edit-2.png')} />
         {/* </View> */}
      </View>
      {
         personal.map( (item,index)=>{
             return(
                 <View key={index} style={styles.account}>
                         <Image style={styles.itemName} source={item.image}/>
                         <View>
                         <Text style={styles.name}>{item.user}</Text>
                         <Text style={styles.personName}> {item.personName}</Text>
                         </View>
                 </View>
             )
         })
       } 
       <View style={styles.addressView}>
        <View style={{width:29,height:29,backgroundColor:'rgb(214, 251, 252)',borderRadius:15}}>
        <Image  source={require('./Image/location-pin.png')} />
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'black'}}>Home</Text>
        <Text style={{marginLeft:10,fontSize:19,color:'black'}}>Lot 5. 11 Level 5 1 Teck Park, {"\n"}
             Bandar Utama, Petaling Jaya,{"\n"}
              Selangor, 47800, Malaysia</Text>
        </View>
        <Image style={{borderRadius:10,marginLeft:8}} source={require('./Image/check-circle.png')} />
       </View> 
        <TouchableOpacity style={styles.editProfileTouch}>
         <Text style={styles.editProfile}>edit profile</Text>
        </TouchableOpacity> 
     </View>
  )
}
const styles = StyleSheet.create({
    Top:{
        fontSize:20,
        color:'black',
        fontWeight:'400',
        marginLeft:60,
        marginTop:4,
        textTransform:'capitalize',
        },
        personView:{
            alignItems:'center',
            marginTop:25,
        },
        person:{
            width:80,
            height:80,
            borderRadius:50,
        },
        edit:{
            position:'absolute',
           // marginTop:90,
           top:53,
           left:218
        },
        editCircle:{
            width:25,
            height:25,
            position:'absolute',
           // marginTop:90,
           top:50,
           left:215
        },
    account:{
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:10,
        padding:5,
        marginHorizontal:18,
        marginTop:27
        },
     name:{
        fontSize:17,
        marginLeft:15,
        textTransform:'capitalize',
        color:'black',
        fontWeight:'500',
     },
     personName:{
        fontSize:17,
        marginLeft:15,
        color:'rgb(83, 139, 252)',
        fontWeight:'500',
     },
     addressView:{
        flexDirection:'row',
        marginTop:30,
        borderWidth:1,
        padding:15,
        borderColor:'rgb(83, 139, 252)',
        borderRadius:10,
        marginHorizontal:20
     },
     editProfileTouch:{
        backgroundColor:'rgb(5, 11, 127)',
        padding:10,
        marginHorizontal:15,
        marginTop:30,
        borderRadius:12
     },
     editProfile:{
         fontSize:18,
         textAlign:'center',
         color:'white',
         textTransform:'capitalize',
         fontWeight:'500'
     },
     itemName:{
        marginTop:6
     }
})

export default Personal_Details;
