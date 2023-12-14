import { StyleSheet, Text, View,TouchableOpacity,Image, Dimensions, } from 'react-native'
import React from 'react'

const InviteYourFriends = () => {
  const{height,width}=Dimensions.get('window');
  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)',height:height}}>
    {/* <ScrollView showsVerticalScrollIndicator={true}> */}
     <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
   <TouchableOpacity>
     <Image source={require('./Image/NextButton.png')} />
   </TouchableOpacity>
   <Text style={styles.Top}> Invite your friends</Text>
     </View>
     <View>
        <Image style={styles.secondImage} source={require('./Image/FrameInvite.png')} />
     </View>
     <Text style={styles.refer}>Refer and earn rewards</Text>
     <View style={styles.rewardView}>
     <Image style={styles.ellipse} source={require('./Image/Ellipse2053.png')}/>
       <Image style={styles.rewardImage} source={require('./Image/reward.png')}/>
       <View>
        <Text style={styles.you}>You get free credit of</Text>
        <Text style={styles.rm}>RM5</Text>
       </View>
     </View>
     <View style={styles.rewardView}>
     <Image style={styles.ellipse} source={require('./Image/Ellipse2053.png')}/>
       <Image style={styles.bagImage} source={require('./Image/bag-5.png')}/>
       <View>
        <Text style={styles.you}>Your friend get a voucher  {"\n"}
        of free a bag of option (1)</Text>
        <Text style={styles.rm}>WDF</Text>
       </View>
     </View>
     <View style={styles.loremView}>
     <Text style={styles.lorem}>Lorem Ipsum is simply dummy
       text of the printing and typesetting
        industry. Lorem Ipsum has been the
        industry's standard dummy text ever 
        since the 1500s,</Text>
        </View>
        <TouchableOpacity style={styles.editProfileTouch}>
         <Text style={styles.editProfile}>Invite</Text>
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
  secondImage:{
      marginHorizontal:25,
      marginTop:15
  },
  refer:{
    fontSize:18,
    color:'black',
    marginTop:25,
    fontWeight:'500',
    textAlign:'center'
  },
  rewardView:{
     flexDirection:'row',
     marginLeft:25,
     marginTop:23
  },
  ellipse:{
     width:55,
     height:55
  },
  rewardImage:{
    width:30,
    height:30,
    position:'absolute',
    top:12,
    left:12
  },
  bagImage:{
    width:30,
    height:30,
    position:'absolute',
    top:10,
    left:12
  },
  you:{
    fontSize:17,
    color:'black',
    marginRight:25,
    marginTop:10,
    marginLeft:10,
    fontWeight:'500'
  },
  rm:{
    textTransform:'uppercase',
    fontSize:17,
    color:'blue',
    marginLeft:10,
    fontWeight:'500'
  },
  loremView:{
     marginHorizontal:45,
     marginTop:25,
  },
  lorem:{
    fontSize:14,
    textAlign:'center',
    lineHeight:24
  },
  editProfileTouch:{
    backgroundColor:'rgb(5, 11, 127)',
    padding:10,
    marginHorizontal:30,
    marginTop:30,
    borderRadius:12
 },
 editProfile:{
     fontSize:18,
     textAlign:'center',
     color:'white',
     textTransform:'capitalize',
     fontWeight:'400'
 },
})

export default InviteYourFriends
