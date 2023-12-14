import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Personal_Details from './Personal_Details';

const Account = () => {
    const navigation=useNavigation();
     const {height,width}=Dimensions.get('window');
     const[personal,setPersonal]=useState(null);
     const[success,setSuccess]=useState(false);
     const[details,setDetails]=useState(false)
     const Main=(name1)=>{
        setPersonal(name1);
        console.log(`select ${name1}`);
        //  if(name1=='personal details'){
        //     navigation.navigate('Personal_Details');
        // }
        // else if(name1=='payment cards'){
        //     navigation.navigate('Payment_Method');
        // }
        // else{
        //     navigation.navigate('DeliveryAddress');
        // }
     }
     const Hello=(name1)=>{
        if(name1=='personal details'){
            navigation.navigate('Personal_Details');
        } else if(name1=='payment cards'){
            navigation.navigate('Payment_Method');
        }else{
             navigation.navigate('DeliveryAddress');
        }
     }
    const account=[
        {
            id:1,
            image:require('./Image/user-check.png'),
            name1:"personal details",
            images:require('./Image/fi-rr-angle.png')
        },
        {
            id:2,
            image:require('./Image/credit-card.png'),
            name1:"payment cards  ",
            images:require('./Image/fi-rr-angle.png')
        },
        {
            id:3,
            image:require('./Image/address-location.png'),
            name1:"address              ",
            images:require('./Image/fi-rr-angle.png')
        },
    ]
    const match=[
        {
            id:1,
            image:require('./Image/chat-round.png'),
            name:"support                   ",
            images:require('./Image/fi-rr-angle.png')
        },
        {
            id:2,
            image:require('./Image/info-2.png'),
            name:"terms of services",
            images:require('./Image/fi-rr-angle.png')
        },
    ]
  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)',height:height}}>
    {/* <ScrollView showsVerticalScrollIndicator={true}> */}
    <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
   <TouchableOpacity>
     <Image source={require('./Image/NextButton.png')} />
   </TouchableOpacity>
   <Text style={styles.Top}>Top up</Text>
     </View>
     <Text style={styles.orderText}>order history</Text>
     <View style={styles.account}>
        <Image source={require('./Image/Group2024.png')} />
        <Text style={styles.name}>my orders</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('MyOrder')}>
        <Image style={styles.imageMyOrdersButton} source={require('./Image/fi-rr-angle.png') } />
        </TouchableOpacity>
     </View>
     <Text style={styles.orderText}>Account setting</Text>
      {
        account.map( (item,index)=>{
            return(
                <View key={index} style={styles.account}>
                        <Image source={item.image}/>
                        <Text style={styles.name}>{item.name1}</Text>
                        <TouchableOpacity onPress={()=> Main(item.name1)} onPressIn={()=>Hello(item.name1)}>
                        <Image style={styles.image} source={item.images}/>
                    </TouchableOpacity>
                </View>
            )
        })
      }
     <Text style={styles.orderText}>Referals and credit</Text>
     <View style={styles.account}>
        
        <Image source={require('./Image/Group2025.png')} />
        <Text style={styles.name}>invite your friends</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('InviteYourFriends')}>
        <Image style={styles.imageInvite} source={require('./Image/fi-rr-angle.png')} />
        </TouchableOpacity>
     </View>
     <Text style={styles.orderText}>Help center</Text>
     {
        match.map( (item,index)=>{
            return(
                <View key={index} style={styles.account}>
                        <Image source={item.image}/>
                        <Text style={styles.name}>{item.name}</Text>
                        <TouchableOpacity>
                        <Image style={styles.imageTerms} source={item.images}/>
                    </TouchableOpacity>
                </View>
            )
        })
      }
     </View>
  )
}
const styles = StyleSheet.create({
    Top:{
        fontSize:23,
        color:'black',
        fontWeight:'400',
        marginLeft:120,
        marginTop:4,
        textTransform:'capitalize',
        },
        account:{
            flexDirection:'row',
            borderWidth:0.5,
           // borderColor:'grey',
            borderRadius:10,
            padding:5,
            marginHorizontal:18,
            marginTop:15
        },
     name:{
        fontSize:17,
        marginLeft:15,
        marginTop:4,
        textTransform:'capitalize',
        color:'black',
        marginRight:50
     },
     image:{  
         marginLeft:90,
         marginTop:5
     },
     imageInvite:{
        marginLeft:70,
        marginTop:5
     },
     imageMyOrdersButton:{
        marginLeft:135,
        marginTop:5
    },
       orderText:{
        fontSize:18,
        marginLeft:18,
        marginTop:25,
        textTransform:'capitalize',
        color:'black',
        fontWeight:'500',
       },
       imageTerms:{
        marginLeft:70,
        marginTop:7
       }
})

export default Account
