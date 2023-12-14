import { StyleSheet, Text,FlatList, View ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import React, { useState } from 'react'

const Vouchers = ({navigation}) => {
    const[coupon,setCoupon]=useState('');
    const data=[
           {
             id:1,
             image:require('./Image/Rectangle9495.png'),
             wash:'Wash Dry and Fold',
             tag:'it beg load only at RM g gool',
             use:'use code',
             dry:'DRYFIRST0g',
             apply:'apply',
             tc:'T&C apply'
           },
           {
            id:2,
            image:require('./Image/Rectangle944.png'),
            wash:'Wash Dry and Fold',
            tag:'it beg load only at RM g gool',
            use:'use code',
            dry:'DRYFIRST09',
            apply:'apply',
            tc:'T&C apply'
          },
    ]
  return (
    
 <View style={{backgroundColor:'rgb(255, 255, 255)'}}>
 <ScrollView showsVerticalScrollIndicator={true}>
 <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
<TouchableOpacity onPress={()=>navigation.navigate('Payment_Method')}>
  <Image source={require('./Image/NextButton.png')} />
</TouchableOpacity>
<Text style={{fontSize:22,color:'black',fontWeight:'500',marginLeft:95,marginTop:4,textTransform:'capitalize',}}>Vouchers</Text>
  </View>
    <View style={styles.starView}>
    <Image source={require('./Image/Group2040.png')}/>
    </View>
    <View style={styles.ImageBox}>
        <Image style={{marginTop:18}} source={require('./Image/Group2035.png')}/>
        <View >
        <Text style={styles.total}>Total Points</Text>
        <Text style={styles.total30}>30</Text>
        </View>
        <View >
            <View style={{flexDirection:'row',}}>
             <Image  /> 
             <Image style={styles.Starrainbow} source={require('./Image/starMan.png')}/>
            <Text style={styles.sliver}>Sliver</Text>
            </View>
            <TouchableOpacity style={styles.myTouchable}>
             <Text style={styles.totalReward}>My Rewards</Text>
            </TouchableOpacity>
       </View>
       </View>
      <View style={styles.couponView}>
        <Text style={styles.apply}>apply coupon</Text>
       <TextInput 
        style={styles.TextInput}
        placeholder='Enter Coupon No.'
        keyboardType='number-pad'
        value={coupon}
        onChangeText={(coupon)=>setCoupon(coupon)
         }/>
    </View>
    <Text style={styles.Vouchers}>Vouchers</Text>
    <FlatList 
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={ ({item})=>{
        return(
            <View style={styles.ItemImageView}>
            <Image style={styles.itemImage} source={item.image}/>
            <View style={styles.washView}>
              <Text style={styles.wash}>{item.wash}</Text>
              <Text style={styles.tag}>{item.tag}</Text>
              <Text style={styles.tag}>{item.use}</Text>
              <TouchableOpacity style={styles.dryTouchable}>
              <Text style={styles.dry}>{item.dry}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyTouchable}>
              <Text style={styles.applyText}>{item.apply}</Text>
              </TouchableOpacity>
              <Text style={styles.tc}>{item.tc}</Text>
            </View>
            </View>
        )
      }}
    />
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  starView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:20
  },
  ImageBox:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderRadius:12,
    borderWidth:1,
    borderColor:'grey',
    paddingVertical:12,
    paddingBottom:28,
    marginHorizontal:20,
    marginTop:20,

  },
  myTouchable:{
    borderRadius:8,
    borderColor:'black',
    padding:3,
    paddingHorizontal:7,
    borderWidth:1,
    marginTop:8
},
  total:{
    fontSize:16,
    color:'black',
    marginTop:14
  },
  sliver:{
    fontSize:16,
    color:'black',
   
  },
  total30:{
    fontSize:23,
    color:'black',
    
  },
  totalReward:{
    fontSize:14,
    color:'black',
  },
  Starrainbow:{
    // width:14,
    // height:14,
    marginLeft:34,
    resizeMode:'contain'
  },
  couponView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:18
},
apply:{
    fontSize:16,
    marginTop:12,
    textTransform:'capitalize',
    color:'rgb(5, 11, 127)',
    fontWeight:'500'
},
Vouchers:{
    fontSize:20,
    marginTop:12,
    textTransform:'capitalize',
    marginLeft:20,
    color:'black'
},
TextInput:{
    fontSize:16,
    borderWidth:0.5,
    borderRadius:10,
    paddingHorizontal:25,
    
},
ItemImageView:{
  flexDirection:'row',
  borderRadius:8,
  borderWidth:.8,
  marginHorizontal:20,
  borderColor:'grey',
  marginTop:20,
  marginBottom:30
},
washView:{
  marginHorizontal:15,
},
wash:{
  fontSize:16,
  color:'rgb(5, 11, 127)',
  //textTransform:'capitalize',
  fontWeight:'500',
  marginTop:8
},
tag:{
  fontSize:14,
  color:'black',
  marginTop:2,
},
applyTouchable:{
  borderWidth:.7,
  borderRadius:5,
  borderColor:'grey',
  marginTop:12,
  width:80,
  padding:2,
},
applyText:{
    fontSize:16,
    textTransform:'capitalize',
    color:'rgb(5, 11, 127)',
    fontWeight:'500',
    textAlign:'center'
},
tc:{
  fontSize:13,
  color:'black',
  marginTop:5,
  textAlign:'right',
  marginLeft:20
},
dryTouchable:{
   borderWidth:.7,
   borderRadius:6,
   borderColor:'grey',
   padding:2,
   width:105,
   marginTop:8,
},
dry:{
  fontSize:15,
  color:'black',
  textAlign:'center'
},

})
export default Vouchers;
