import { Dimensions, FlatList, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Activity = () => {
    const{width,height}=Dimensions.get('window');
    const activeList=[
           {
            id:1,
            image:require('./Image/Group2017.png'),
            heading:'Successfull Delivered',
            text:'Hi John! your order #245871 has been successfully delivered to you.',
            time:'2hrs ago',
          },
           {
            id:2,
            image:require('./Image/Group2018.png'),
            time:'2hrs ago',
            heading:'Your order is now in-process',
            text:'Your order #5689 is in process. It will be shipped within 24hrs.'
           },
           {
            id:3,
            image:require('./Image/Group2019.png'),
            time:'2hrs ago',
            heading:'Voucher for you',
            text:'Congratulations! You can use a new voucher.',
            first: 'FIRST10'
           },
           {
            id:4,
            image:require('./Image/Group2020.png'),
            time:'2hrs ago',
            heading:'Your order has been cancelled',
            text:'Hi John! your order #245871 has been cancelled by you.'
           },
      ]
  return (
      <View style={{backgroundColor:'rgb(255,255,255)',height:height}}>
      <View style={{flexDirection:'row',marginTop:14,marginLeft:17}}>
      <TouchableOpacity onPress={ ()=>navigation.navigate('Services')}>
        <Image source={require('./Image/NextButton.png')} />
      </TouchableOpacity>
      <Text style={styles.Order_Detail}>
         Activity
    </Text>
   </View>

    { 
    activeList.map((item,index)=>{
      return(
          <View style={styles.imageView}>
           <Image style={styles.image} source={item.image}/>
           <View>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
         <Text style={styles.time}>{item.time}</Text>
        </View>
      )
     }    
     )
    }
   </View>
  )
}
const styles = StyleSheet.create({
    Order_Detail:{
       fontSize:21,
       color:'black',
       marginLeft:90,
       marginTop:4,
       textTransform:'capitalize',
       fontWeight:'500'
       },
       imageView:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:20,
        borderWidth:0.7,
        borderRadius:12,
        padding:16,
       },
       heading:{
        fontSize:16,
        color:'black',
        marginLeft:12,
       },
       text:{
        fontSize:15,
        marginHorizontal:12,
        color:'rgb(201, 199, 199)'
       },
       time:{
        fontSize:12,
        color:'black',
        marginRight:30,
        position:'absolute',
        right:-20,
        marginTop:20
       }
})

export default Activity
