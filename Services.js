import { Image, StyleSheet, Text, ScrollView, View ,TouchableOpacity,Dimensions} from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';

const Service = ({navigation}) => {
    const[visible,setVisible]=useState(false);
    
    useState(()=>{
      setVisible(!visible);
    },[]);
  return (
    <View style={{marginLeft:0,paddingLeft:0}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.EntyPo}>
          <TouchableOpacity onPress={ ()=>navigation.navigate('Intro_one')}>
        <View style={styles.chav}>
        <Image source={require('./Image/NextButton.png')} />
        </View>
        </TouchableOpacity>
        <View >
       <Text style={styles.service}>Services</Text>
       </View>
       </View>
       <View style={styles.touchable}>
        <Image style={styles.image} source={require('./Image/Group2071.png')}/>
         <Text style={styles.express}>need "Express {"\n"} service" ?</Text>
         <Image style={styles.images} source={require('./Image/Group2073.png')}/>
       </View>
       <View style={styles.TouchableOpacity}>
        <View >
         <Text style={styles.expressWorld}>wash dry & fold </Text>
         <Text style={styles.expressWorldText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity onPress={ ()=>setVisible(!visible)}>
            <Text style={styles.man}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image  source={require('./Image/Group1826.png')}/>
       </View> 
       <View style={styles.TouchableOpacity2}>
        <View >
         <Text style={styles.expressWorldDry}> dry & fold </Text>
         <Text style={styles.expressWorldDryText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.manText}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image  source={require('./Image/Group1830.png')}/>
       </View>
       <View style={styles.TouchableOpacity}>
        <View >
         <Text style={styles.expressWorld}>lroning </Text>
         <Text style={styles.expressWorldText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.man}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image   source={require('./Image/Group1831.png')}/>
       </View>
       <View style={styles.TouchableOpacity2}>
        <View >
         <Text style={styles.expressWorldDry}> dry cleaning </Text>
         <Text style={styles.expressWorldDryText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.manText}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image style={styles.imageWash} source={require('./Image/Group1832.png')}/>
       </View>
       <View style={styles.TouchableOpacity2}>
        <Image style={{marginLeft:36}} source={require('./Image/Group1833.png')}/>
        <View >
         <Text style={styles.expressWorldDry}> household</Text>
         <Text style={styles.expressWorldDryText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.manText}>read more </Text>
          </TouchableOpacity>
         </View>   
       </View>
       <TouchableOpacity style={styles.countinues}
        onPress={()=>navigation.navigate('ResisterUserDashboard')}
       >
        <Text style={styles.countinuesText}>Countine</Text>
       </TouchableOpacity>
       <View style={styles.others}>
        <Text style={styles.othersText}>for others services</Text>
        <View style={styles.contactUs}>
       <TouchableOpacity onPress={()=>setVisible(!visible)}>
        <Text style={styles.contactUsText}>Contact Us</Text>
       </TouchableOpacity>
       </View>
       </View>

       <Modal 
       isVisible={!visible} 
       onBackButtonPress={()=>setVisible(!visible)}
        >
        <View style={{height:560,
          width:352, marginTop:50, borderRadius:10,backgroundColor:'rgb(255,255,255)'}}>
          <TouchableOpacity onPress={()=>setVisible(!visible)}>
            <Image style={{position:'absolute',top:12,right:12}} source={require('./Image/close-circle.png')}/>
            </TouchableOpacity>
             <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{marginTop:70,width:70,height:70}} source={require('./Image/Group2074.png')}/>
            </View>
            <Text style={styles.usercan}> User can also select Express Service with following terms : </Text>
             <View style={styles.thisApply}>
                <Text style={styles.count}>1)</Text>
                <Text style={styles.thiswdp}>This applies to WDF ,Df and Ironing services only
                 </Text>
                 </View>
                <View style={styles.thisApply}>
                <Text style={styles.count}>2)</Text>
                <Text style={styles.thiswdp}>The lead time is 3 hours for completion 
                    </Text>
                    </View>
                <View style={styles.thisApply}>
                <Text style={styles.count}>3)</Text>
                <Text style={styles.thiswdp}>you need to drop off the loundry at the  shop and then pick it up
                     </Text>
                     </View>
                <View style={styles.thisApply}>
                <Text style={styles.count}>4)</Text>
                <Text style={styles.thiswdp}> 
                     The fee is RM1g for WDF and DF ,double price is 
                    </Text>
                    </View>
                <TouchableOpacity style={styles.continue} onPress={()=>navigation.navigate('Services')}> 
                    <Text style={{fontSize:23,textAlign:'center',color:'white',fontWeight:'600'}}>Continue</Text>
                </TouchableOpacity>
        </View>
       </Modal >
       </ScrollView>
    </View>
  )
}
const{width,height} =Dimensions.get('window')
const styles = StyleSheet.create({
  EntyPo:{
    flexDirection:'row',
    marginTop:10,
  },
  chav:{
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:15,
  },
  service:{
    marginLeft:133,
    fontSize:21,
    color:'black',
    fontWeight:'400',
    marginTop:5
  },
  touchable:{
    flexDirection:'row',
    height:95,
    borderRadius:10,
    borderColor:'black',
    borderWidth:0.5,
    marginHorizontal:10,
    marginTop:23,
    marginBottom:15,
  },
  image:{
     width:60,
     height:60,
    marginTop:16,
    marginLeft:18
  },
  images:{
    width:27,
    height:30,
   marginTop:28,
   marginLeft:35
 },
 ModalInnerView:{
  
},
ModalOuterView:{
  // marginTop:60,
  // height:570,
  // width:width,
 //borderRadius:15,
},
  express:{
    fontSize:22,
    textAlign:'center',
    color:'rgb(5, 11, 127)',
    marginTop:16,
    textTransform:'capitalize',
    marginLeft:40,
    fontWeight:'400'
  },
  usercan:{
    marginLeft:17,
    marginTop:18,
    fontSize:21,
    marginHorizontal:10,
    color:'rgb(5, 11, 127)',
    fontWeight:'400'
},
continue:{
  backgroundColor:'rgb(5, 11, 127)',
  padding:11,
  marginHorizontal:15,
  borderRadius:10,
  marginTop:15
},
thisApply:{
  flexDirection:'row',
  marginTop:12,
  marginHorizontal:20,
},
thiswdp:{ 
  fontSize:16,
  fontWeight:'400',
  lineHeight:27
},
count:{
  fontSize:16,
  fontWeight:'400',
  marginTop:4
},
expTouch:{
  backgroundColor:'orange',
  width:"80%",
  height:40,
  marginTop:18,
  borderRadius:10,
  },
  TouchableOpacity:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'rgb(5, 11, 127)',
    borderColor:'black',
    borderWidth:0.5,
    marginHorizontal:10,
    marginTop:13,
    borderRadius:10
  },
  expressWorld:{
    fontSize:19,
    color:'white',
    marginLeft:15,
    marginTop:6,
    textTransform:'capitalize'
  },
  expressWorldText:{
    fontSize:15,
    marginTop:7,
    marginLeft:15,
    color:'white',
  },
  man:{
    color:'white',
    marginLeft:15,
    fontSize:16,
    marginTop:7,
    textDecorationLine:'underline',
    textTransform:'capitalize'
  },
  TouchableOpacity2:{
    flexDirection:'row-reverse',
    justifyContent:'flex-end',
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:0.5,
    marginHorizontal:10,
    marginTop:23,
    borderRadius:10
  },
  expressWorldDry:{
    fontSize:20,
    color:'black',
    marginTop:6,
    textTransform:'capitalize',
    marginLeft:18,
  },
  expressWorldDryText:{
    fontSize:15,
    marginTop:7,
    marginLeft:23,
  },
  manText:{
    color:'blue',
    fontSize:16,
    marginTop:7,
    textDecorationLine:'underline',
    textTransform:'capitalize',
    marginLeft:23,
  },
  others:{
    flexDirection:'row',
    marginHorizontal:15,
    borderWidth:1,
    backgroundColor:"rgb(5, 136, 183)",
    borderRadius:10,
    marginTop:15,
    padding:15,
    marginBottom:20

  },
  othersText:{
    marginLeft:14,
    fontSize:17,
    color:'white',
    textTransform:'capitalize',
    marginTop:5
  },
  contactUsText:{
    fontSize:17,
    color:'rgb(5, 11, 127)',
    fontWeight:'500'
  },
  contactUs:{
    borderWidth:1.5,
    borderColor:'rgb(5, 11, 127)',
    marginLeft:50,
    borderRadius:10,
    paddingHorizontal:10,
    padding:3
  },
  countinues:{
    backgroundColor:'rgb(5, 11, 127)',
    marginHorizontal:18,
    padding:8,
    borderRadius:10,
    marginTop:18,

  },
  countinuesText:{
     color:'white',
     fontSize:22,
     textAlign:'center',


  }
})

export default Service;
