import { StyleSheet, Text, View ,TouchableOpacity,Image, ScrollView,} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Guest_Dashboard = () => {
const navigation=useNavigation();
  
  return (
    <View>
       <ScrollView>
        <Text style={{fontSize:17,marginTop:15,marginLeft:10,color:'black'}}>Hi</Text>
      <Text style={{fontSize:17,marginTop:4,color:'black',marginLeft:10}}>Good morning Guest! </Text>
      <View style={styles.TouchableOpacity}>
        <View >
         <TouchableOpacity style={{backgroundColor:'orange',padding:1,marginLeft:13,marginTop:8,borderRadius:8}}>
            <Text style={{clor:'black',fontSize:16,textAlign:'center',}}>Freshly clean clothes </Text>
         </TouchableOpacity>
         <Text style={styles.expressWorld}>loundly services </Text>
         <Text style={styles.expressWorldText}>Get 10% off  </Text>
         <Text style={{marginLeft:19,fontSize:17,color:'white'}}>User Code</Text>
         <View style={{borderWidth:0.5,borderColor:'white',marginHorizontal:35}}>
         <Text style={{textTransform:'uppercase',fontSize:17,marginLeft:10,color:'white'}}>dryfirst01</Text>
         </View>
         
          <TouchableOpacity>
            <Text style={styles.man}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image style={styles.imageWash} source={require('./Image/Group81.png')}/>
       </View>
       <View style={{flexDirection:'row',marginTop:28,marginHorizontal:18}}>
        <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',paddingHorizontal:17,padding:8,borderRadius:10}}>
          <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Puckup&delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DropTouch}>
          <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Sell & Drop</Text>
        </TouchableOpacity>
       </View>
       <View style={{width:'90%',height:180,marginTop:25,marginLeft:20,alignItems:'center',justifyContent:'center',borderRadius:10,borderWidth:0.5,borderColor:'blue'}}>
        <Text style={{fontSize:21,textAlign:'center',color:'black'}} >Add your address and book your order</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image style={{width:35,height:35,resizeMode:'contain'}} source={require('./Image/location1.webp')}/>
          <Text style={{fontSize:17,color:'bue',fontWeight:'600'}}>set your address </Text>
        </View>
        <View>
        <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:70,padding:10,borderRadius:8,marginTop:15,}}
          onPress={()=>navigation.navigate('ResisterUserDashboard')}
        >
          <Text style={{textAlign:'center',fontSize:19,color:'white'}}>Order now</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection:'row',borderRadius:8,height:120,marginTop:20,marginHorizontal:20,borderWidth:0.5,borderColor:'grey'}}>
          <Image style={{height:90,width:90,resizeMode:'contain'}} source={require('./Image/Group2023.png')} />
          <View>
            <Text style={{color:'black',textAlign:'center',fontSize:20,marginTop:15}}> Checkout our price list </Text>
            <Text style={{color:'black',textAlign:'center',fontSize:17,}}>  lorem ipsum simple is dummy 
             {"\n"} text in the printing </Text>
          </View>
        </View>
       <View style={{flexDirection:'row',width:'90%',borderRadius:8,height:120,marginTop:20,marginHorizontal:20,backgroundColor:'rgb(13, 62, 196)',marginBottom:30}}>
        <Image style={{marginLeft:10}} source={require('./Image/FrameSound.png')}/>
        <View style={{marginLeft:15}}>
        <Text style={{color:'white',fontSize:18,marginTop:13}}>Refer with friends and earn {"\n"}
         credit vouchers</Text>
        <TouchableOpacity>
          <Text style={{color:'white',fontSize:17,textDecorationLine:'underline',marginTop:8}}>refer now</Text>
        </TouchableOpacity>
        </View>
       </View>
       </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    TouchableOpacity:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'rgb(3, 27, 163)',
        borderColor:'black',
        borderWidth:0.5,
        marginTop:13,
        
      },
      expressWorld:{
        fontSize:22,
        color:'white',
        marginLeft:15,
        marginTop:6,
        textTransform:'capitalize'
      },
      expressWorldText:{
        fontSize:17,
        marginTop:7,
        marginLeft:15,
        color:'white',
      },
      man:{
        color:'white',
        marginLeft:15,
        fontSize:17,
        marginTop:7,
        textDecorationLine:'underline',
        textTransform:'capitalize'
      },
      imageWash:{
        width:190,
       // resizeMode:'contain',
      },
      DropTouch:{
        backgroundColor:'grey',
        marginLeft:12,
        paddingHorizontal:38,
        padding:8,
        borderRadius:20,
      },
     
})

export default Guest_Dashboard

