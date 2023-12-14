import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Order_Detail = () => {
    
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
   <View style={{flexDirection:'row',marginTop:14,marginLeft:17}}>
    <TouchableOpacity onPress={ ()=>navigation.navigate('Services')}>
      <Image source={require('./Image/NextButton.png')} />
    </TouchableOpacity>
    <Text style={styles.Order_Detail}>
         order detail
    </Text>
   </View>
   <View style={styles.Order}>
    <Image style={{marginTop:8}} source={require('./Image/Group2024.png')}/>
    <View>
    <Text style={styles.OrderId}>Order ID:#56987</Text>
    <View style={styles.OrderDate}>
        <Image style={{marginTop:4}} source={require('./Image/date.png')} />
        <Text style={{marginLeft:4}} >july 22,2023</Text>
    {/* </View>
    <View style={styles.OrderDate}> */}
        <Image style={{marginTop:4,marginLeft:14}} source={require('./Image/clock-circle.png')} />
        <Text style={{marginLeft:4}}>02:05 pm</Text>
    </View>
    </View>
    <TouchableOpacity style={styles.completeTouch}>
        <Text style={{textAlign:'center',color:'white'}}>compalete</Text>
    </TouchableOpacity>
   </View>
      <Text style={styles.payment}>Payment information</Text>
      <View style={styles.paymentMethodView}>
        <Text style={styles.paymentText}>Payment method: <Text style={{fontSize:16,color:'grey'}}>credit card</Text></Text>
        <View style={styles.paymentMethod}>
            <Text style={styles.delivery}>Delivery address</Text>
            <Text style={{fontSize:16,color:'grey'}}>Lot 5. 11 Level 5 1 Teck Park,Petaling {"\n"}
             bana, Jaya, Selangor, 47800, Malaysia</Text>
        </View>
    </View>
     <Text style={styles.track}>Track order</Text>
     <View style={styles.trackView}>
        <Image source={require('./Image/Group2069.png')} />
        <View>
        <View style={styles.washingView}>
            <Text style={styles.washing}>washing</Text>
            <Text style={styles.time}>11.30 am</Text>
        </View>
        <Text style={styles.lorem}>Loerm ipsum is simple dummy text of the</Text>

        <View style={styles.washingView}>
            <Text style={styles.washing}>cleaning</Text>
            <Text style={styles.time}>12.30 pm</Text>
        </View>
        <Text style={styles.lorem}>Loerm ipsum is simple dummy text of the</Text>

        <View style={styles.washingView}>
            <Text style={styles.drying}>drying</Text>
        </View>
        <Text style={styles.loremi}>Loerm ipsum is simple dummy text of the</Text>

        <View style={styles.washingView}>
            <Text style={styles.drying}>deliver</Text>
        </View>
        <Text style={styles.loremi}>Loerm ipsum is simple dummy text of the</Text>
        </View>
       </View>
      </ScrollView> 
    </View>
  )
}
const styles = StyleSheet.create({
    Order_Detail:{
    fontSize:21,
    color:'black',
    marginLeft:80,
    marginTop:4,
    textTransform:'capitalize',
    fontWeight:'500'
    },
   Order:{
    flexDirection:'row',
    marginHorizontal:20,
    borderWidth:0.5,
    borderColor:'grey',
    borderRadius:12,
    padding:12,
    marginTop:22
   },
   OrderId:{
    fontSize:17,
    color:'black',
    marginLeft:7
   },
   OrderDate:{
    flexDirection:'row',
    marginLeft:7
   },
   completeTouch:{
    backgroundColor:'green',
    borderRadius:5,
    marginLeft:15,
   height:23,
   paddingHorizontal:10 
   },
   payment:{
    fontSize:17,
    color:'grey',
    marginTop:28,
    marginLeft:20
   },
   paymentText:{
    fontSize:17,
    color:'black',
    textTransform:'capitalize',
   },
   paymentMethodView:{
       borderWidth:0.3,
       borderRadius:12,
       borderColor:'grey',
       marginHorizontal:20,
       padding:20,
       marginTop:15
   },
   paymentMethod:{
    borderTopWidth:0.3,
    borderColor:'grey',
    marginTop:15
   },
   delivery:{
    fontSize:16,
    color:'black',
    marginTop:10,
    textTransform:'capitalize'
   },
   track:{
     fontSize:17,
     textTransform:'capitalize',
     color:'black',
     marginLeft:20,
     marginTop:30
   },
   trackView:{
    flexDirection:'row',
    borderRadius:12,
    borderWidth:0.5,
    marginHorizontal:20,
    padding:20,
    marginTop:15,
    marginBottom:20
   },
   washingView:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginLeft:15,
   },
   lorem:{
      marginLeft:15,
      marginBottom:30,
   },
   loremi:{
    marginLeft:15,
    marginBottom:30,
    color:'rgb(216, 214, 214)'
 },
   washing:{
      fontSize:16,
      textTransform:'capitalize',
      color:'black',
      fontWeight:'400'
   },
   drying:{
    fontSize:16,
    textTransform:'capitalize',
    color:'rgb(191, 189, 189)',
    fontWeight:'400'
 },
   time:{
    fontSize:11,
    textTransform:'uppercase',
    fontWeight:'400',
    position:'relative',
    left:23
   }
})

export default Order_Detail;
