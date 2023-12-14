import { View, Text, TouchableOpacity,Image,StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
 import Modal from "react-native-modal";

const Checkout=({navigation})=>{

return(
 <View style={{backgroundColor:'rgb(239, 252, 252)'}}>
 <ScrollView showsVerticalScrollIndicator={true}>
 <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
<TouchableOpacity onPress={()=>navigation.navigate('NewAddress')}>
  <Image source={require('./Image/NextButton.png')} />
</TouchableOpacity>
<Text style={{fontSize:23,color:'black',fontWeight:'500',marginLeft:35,marginTop:4,textTransform:'capitalize',}}>
    schedule pickup & drop
</Text>
</View>
<Text style={{fontSize:21,marginTop:10,color:'black',fontWeight:'500',marginLeft:10}}>Address</Text>
<Text style={{fontSize:19,fontWeight:'500',marginLeft:10,}}>Pickup and drop address</Text>
<View style={{borderWidth:1,marginTop:20,backgroundColor:'rgb(255,255,255)',borderRadius:12,marginHorizontal:10,paddingHorizontal:8,paddingBottom:18,}}>
<View >
<View style={{alignSelf:'flex-end',marginTop:8}}>
 <TouchableOpacity onPress={()=>navigation.navigate('NewAddress')}>
     <Image  source={require('./Image/edit-4.png')}/>
 </TouchableOpacity>
 </View>
 <View style={{flexDirection:'row',}}>
<Image style={{width:35,height:35,backgroundColor:'blue',borderRadius:8}} source={require('./Image/home.png')} />
<View>
  <TouchableOpacity onPress={ ()=>setVisible(true)}>
<Text style={{marginLeft:10,fontSize:22,color:'black'}}>Home</Text>
</TouchableOpacity>
<Text style={{marginLeft:10,fontSize:19,color:'black',fontWeight:'300'}}>Lot 5. 11 Level 5 1 Teck Park, {"\n"}
     Bandar Utama, Petaling Jaya,{"\n"}
      Selangor, 47800, Malaysia</Text>
</View>
</View>
</View>
<View style={{borderTopWidth:0.4,marginTop:15}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:14}}>
<Image style={{backgroundColor:'blue',width:24,height:23}} source={require('./Image/home.png')} />
<Text style={{color:'black',marginLeft:10,fontSize:18,textTransform:'capitalize',fontWeight:'400'}}>my location </Text>
<View>
<Image source={require('./Image/Group1942.png')} />
</View>
<Image style={{marginTop:3}} source={require('./Image/Group1892.png')} />
<Text style={{color:'black',marginLeft:1,fontSize:18,textTransform:'capitalize',fontWeight:'400'}}>loundry shop </Text>
</View>
</View>
</View>

    <Text style={{fontSize:20,color:'black',marginTop:16,marginLeft:20,fontWeight:'500',}}>Time and Date</Text>
    <View style={{backgroundColor:'rgb(255,255,255)',marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:'grey',paddingBottom:15}}>
    <View style={{alignSelf:'flex-end',marginRight:7,marginTop:5}}>
    <TouchableOpacity>
        <Image  source={require('./Image/edit-4.png')}/>
     </TouchableOpacity>
     </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:20}}>
        <View>
        <Text style={{fontSize:19,color:'black',fontWeight:'500'}}>Pickup</Text>
        <View style={{flexDirection:'row',}}>
            <Image style={{marginTop:10}} source={require('./Image/calendar.png')} />
           
            <Text style={{marginLeft:5,marginTop:10,fontWeight:'500',fontSize:16,textTransform:'capitalize',color:'black'}}>27 jul,Wed</Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
            <Image style={{marginTop:10}} source={require('./Image/clock-circles.png')} />
            <Text style={{marginLeft:5,fontWeight:'500',fontSize:16,textTransform:'uppercase',marginTop:10,color:'black'}}>2-4 pm</Text>
        </View>
     </View>
     <View  style={{marginLeft:60}}>
        <Text style={{fontSize:19,color:'black',fontWeight:'500',}}>Delivery</Text>
        <View style={{flexDirection:'row',}}>
            <Image style={{marginTop:10}} source={require('./Image/calendar.png')} />
            <Text style={{marginLeft:5,fontSize:16,fontWeight:'500',marginTop:10,textTransform:'capitalize',color:'black'}}>27 jul,Wed</Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'rgb(255,255,255)'}}>
            <Image style={{marginTop:10}} source={require('./Image/clock-circles.png')} />
            <Text style={{marginLeft:5,fontWeight:'500',fontSize:16,textTransform:'uppercase',marginTop:10,color:'black'}}>2-4 pm </Text>
            </View>
            </View>
         </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{fontSize:20,color:'black',fontWeight:'600',marginLeft:20,marginTop:15,}}>Order Summery</Text>
           <TouchableOpacity>
            <Image style={{marginTop:20,width:22,height:22,marginRight:20}} source={require('./Image/edit-4.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.ShartsView}>
            <View style={styles.shartView}>
                <Text style={styles.shart}>Shart</Text>
                <Text style={styles.x}>X2</Text>
                <Text style={styles.shart}>RM 20</Text>
            </View>
            <View style={styles.shartView}>
                <Text style={styles.shart}>T-shart</Text>
                <Text style={styles.x}>X1</Text>
                <Text style={styles.shart}>RM 05</Text>
            </View>
            <View style={styles.shartView}>
                <Text style={styles.shart}>Pant</Text>
                <Text style={styles.x}>X2</Text>
                <Text style={styles.shart}>RM 24</Text>
            </View>
            <View style={styles.shartView}>
                <Text style={styles.shart}>Blazzer</Text>
                <Text style={styles.x}>X3</Text>
                <Text style={styles.shart}>RM 120</Text>
            </View>
            <View style={styles.totalView}>
                <Text style={styles.total}>sub total</Text>
                <Text style={styles.totalRm}>RM 169</Text>
            </View>
            <View style={styles.totalView}>
                <Text style={styles.total}>tex</Text>
                <Text style={styles.totalRm}>RM 05</Text>
            </View>
            <View style={styles.totalView}>
                <Text style={styles.total}>Transportation fee</Text>
                <Text style={styles.totalRm}>RM 10</Text>
            </View>
        </View>
        <View style={{borderWidth:.8,borderColor:'grey',backgroundColor:'rgb(255,255,255)',borderRadius:15,padding:15,marginHorizontal:15}}>
            <Text style={{fontSize:20,color:'black',fontWeight:'600',marginLeft:18}}>Remark</Text>
            <Text style={{fontSize:15,fontWeight:300,marginHorizontal:20}}>Lorem Ipsum is simply dummy
                 text of the printing and 
                 typesetting industry. Lorem
                  Ipsum has been the industry's
                 standard dummy text ever since the
                  1500s,</Text>
        </View>
       
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'rgb(255,255,255)',borderRadius:12,padding:13,marginTop:17,marginHorizontal:20,borderColor:'grey',borderWidth:1}}>
            <Text style={styles.Upload}>Images Uploaded</Text>
            <Text style={styles.Upload}>5</Text>
        </View>
        <View style={styles.TotalpayView}>
            <View>
            <Text style={styles.TotalPay}>total pay</Text>
            <Text style={styles.RM}>RM 184</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'rgb(11, 24, 132)',borderRadius:14,padding:12,width:180}}
            onPress={()=>navigation.navigate('Payment_Method')}>
                <Text style={styles.order}>order now</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    )
}
const styles=StyleSheet.create({
   
    shart:{
        fontSize:18,
        color:'black',
        fontWeight:'500',

    },
    x:{
        fontSize:17,
        color:'blue',
        fontWeight:'400',
    },
    shartView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderBottomWidth:.5,
        paddingBottom:18,
        marginHorizontal:1,
        marginTop:18,
        borderColor:'grey',
    },
    ShartsView:{
        borderWidth:1,
        marginHorizontal:20,
        backgroundColor:'rgb(255,255,255)',
        marginTop:15,
        marginBottom:15,
        borderRadius:12,
        borderColor:'grey'
    },
    totalView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        
    },
    total:{
        fontSize:19,
        color:'rgb(5, 11, 127)',
        fontWeight:'500',
        marginTop:4,
        marginRight:20,
        textTransform:'capitalize'
    },
    totalRm:{
        fontSize:19,
        color:'rgb(5, 11, 127)',
        fontWeight:'500',
        marginTop:4,
        marginRight:20,
        textTransform:'uppercase',
    },
    Upload:{
        fontSize:20,
        textTransform:'capitalize',
        justifyContent:'center',
        color:'black',
        fontWeight:'500',
        color:'black'
    },
    TotalpayView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
        backgroundColor:'rgb(255,255,255)',
        borderRadius:12,
        padding:15,
        marginTop:17,
        marginHorizontal:20,
        borderColor:'rgb(255,255,255)',
        borderWidth:1
    },
    TotalPay:{
        fontSize:20,
        textTransform:'capitalize',
        justifyContent:'center',
        color:'black',
        fontWeight:'500',
        color:'rgb(5, 11, 127)'
    },
    order:{
        fontSize:20,
        textTransform:'capitalize',
        fontWeight:'600',
        textAlign:'center',
        color:'white',
        
    },
    RM:{
        fontSize:24,
        color:'rgb(5, 11, 127)',
        fontWeight:'500',
    }
})

export default Checkout;