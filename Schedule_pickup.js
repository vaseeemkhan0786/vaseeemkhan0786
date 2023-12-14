import { View, Text, TouchableOpacity,Image,StyleSheet,TouchableWithoutFeedback, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from "react-native-modal";
import BottomSheet from 'react-native-simple-bottom-sheet';


const Items = ({navigation}) => {
 const[visible,setVisible] = useState(false);
 const[isVisible,setIsVisible] = useState(false);
 const[isPressed,setPressed] =useState(false)
 const[isHover,setHover] =useState(false)
  useEffect( ()=>{
    setIsVisible(true);
    setVisible(true);
  },[])
  const submit=()=>{                        
      if(isHover){
        setVisible(true);
      }else{
        setIsVisible(true);
      }
    }
  const Day=[
     {
      id:'1',
      day: "Wednesday",
      date:  "27 jul",
      between:"Betweem",
      time:'09:00 am - 11:00 am'
     },
     {
      id:'2',
      day:"Thursday",
      date:"28 jul",
      between:"Betweem",
      time:'11:00 am - 02:00 pm'
     },
     {
      id:'3',
      day:"Friday",
      date:"29 jul",
      between:"Betweem",
      time:'02:00 pm - 04:00 pm'
     },
     {
      id:'4',
      day:"Saturday",
      date:"30 jul",
      between:"Betweem",
      time:'01:00 pm - 03:00 pm'
     },
     {
      id:'5',
      day:"Sunday",
      date:"31 jul",
      between:"Betweem",
      time:'10:00 am - 12:00 am'
     },
     {
      id:'6',
      day:"Monday",
      date:"01 aug",
      between:"Betweem",
      time:'05:00 pm - 07:00 pm'
     },
     {
      id:'7',
      day:"Tuesday",
      date:"02 aug",
      between:"Betweem",
      time:'08:00 am - 10:00 am'
     }
  ]
  const DayData=[
    {
     id:'1',
     day: "+1 Day",
     date:  " Wednesday2,jul,27",
     between:"Anytime during the day",
    },
    {
     id:'2',
     day:"+2 Day",
     date:"Thursday,jul,28",
     between:"Anytime before 8 pm day",
    },
    {
     id:'3',
     day:"+3 Day",
     date:"Friday,jul,29",
     between:"Anytime before 8 pm day",
    },
    {
     id:'4',
     day:"+4 Day",
     date:"Saturday,jul,30",
     between:"Anytime before  12 pm day",
    },
    {
     id:'5',
     day:"+5 Day",
     date:"Sunday,jul,30",
     between:"Anytime before 1 pm day",
    },
    {
     id:'6',
     day:"+6 Day",
     date:"Monday,aug,01",
     between:"Anytime before 10 pm day",
    },
    {
     id:'7',
     day:"+7 Day",
     date:"Tuesday,aug,02",
     between:"Anytime before 4 pm day",
    }
 ]
  const{width,height}=  Dimensions.get('window')
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
       <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Payment_Success')}>
          <Image source={require('./Image/NextButton.png')} />
        </TouchableOpacity>
        <Text style={{fontSize:21,color:'black',fontWeight:'500',marginLeft:35,marginTop:4,textTransform:'capitalize',}}>
            schedule pickup & drop
        </Text>
       </View>
       <Text style={{fontSize:20,marginTop:10,color:'black',fontWeight:'500',marginLeft:10}}>Address</Text>
       <Text style={{fontSize:17,fontWeight:'500',color:'grey',marginLeft:10,}}>Pickup and drop address</Text>
        <View style={{borderWidth:1,marginTop:20,borderRadius:12,marginHorizontal:10,paddingHorizontal:8,paddingVertical:12}}>
       <View style={{flexDirection:'row',}}>
        <Image style={{width:35,height:35,backgroundColor:'blue',borderRadius:5}} source={require('./Image/home.png')} />
        <View>
        <Text style={{marginLeft:10,fontSize:21,color:'black'}}>Home</Text>
        <Text style={{marginLeft:10,fontSize:18,color:'black',fontWeight:'300'}}>Lot 5. 11 Level 5 1 Teck Park, {"\n"}
             Bandar Utama, Petaling Jaya,{"\n"}
              Selangor, 47800, Malaysia</Text>
        </View>

        <Image style={{borderRadius:10}} source={require('./Image/check-circle.png')} />
        </View>
        <View style={{borderTopWidth:0.4,marginTop:15}}>
       <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:14}}>
        <Image style={{backgroundColor:'blue',width:24,height:23}} source={require('./Image/home.png')} />
        <Text style={{color:'black',marginLeft:10,fontSize:17,textTransform:'capitalize',fontWeight:'400'}}>my location </Text>
        <View>
        <Image source={require('./Image/Group1942.png')} />
        </View>
        <Image style={{marginTop:3}} source={require('./Image/Group1892.png')} />
        <Text style={{color:'black',marginLeft:1,fontSize:17,textTransform:'capitalize',fontWeight:'400'}}>loundry shop </Text>
       </View>
       </View>
       </View>
       <TouchableWithoutFeedback onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)} >
       <View style={[styles.Widthout,isPressed&&styles.WidthoutPressed]}>
        <Image style={{width:60,height:60,marginTop:5}} source={require('./Image/Group2021.png')} />
        <View >
            <Text style={styles.schedulePickup}>schedule your pickup </Text>
            <Text style={{fontSize:18,fontWeight:'400',marginLeft:20}}>Select pickup date and time</Text>
        </View>
        <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}>
        <Image style={{width:30,height:30,marginTop:18,marginLeft:10}} source={require('./Image/fi-rr-angle.png')} />
        </TouchableOpacity>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback 
        onPressIn={()=>setHover(true)} onPressOut={()=>setHover(false)}>
       <View style={[styles.Widthout,isHover&&styles.WidthoutPressed]}>
        <Image style={{width:60,height:60,marginTop:5}} source={require('./Image/Group2021.png')} />
        <View >
            <Text style={styles.schedulePickup}>schedule your delivery </Text>
            <Text style={{fontSize:18,fontWeight:'400',marginLeft:20}}>Select pickup date and time</Text>
        </View>
        <TouchableOpacity onPress={()=>setVisible(!visible)}>
        <Image style={{width:30,height:30,marginTop:18,marginLeft:10}} source={require('./Image/fi-rr-angle.png')} />
        </TouchableOpacity>
       </View>
       </TouchableWithoutFeedback>
       <TouchableOpacity style={{backgroundColor:'rgb(5, 11, 127)',marginTop:30,marginHorizontal:10,padding:13,borderRadius:15}}
       onPress={submit}>
        <Text style={{fontSize:23,color:'white',textAlign:'center'}}>Checkout</Text>
       </TouchableOpacity>
         <Modal style={{margin:0,padding:0}}
        isVisible={!isVisible} 
        onBackButtonPress={()=>setIsVisible(!isVisible)}
        >
         
          <View style={{height:600,width:width,marginTop:150,borderRadius:10,backgroundColor:'rgb(255,255,255)'}}>
          <ScrollView>
            <Text style={{marginTop:15,fontSize:23,textAlign:'center',textTransform:'capitalize',color:'black',fontWeight:'500'}}>schedule your pickup </Text>
             <FlatList
             data={Day}
             renderItem={ ({item})=>{
              return(
                <View>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                   <View style={styles.dayView}>
                  <Text style={styles.day}>{item.day}</Text>
                  <Text style={styles.day}>{item.date}</Text>
                   </View>
                   <View style={styles.betweenView}>
                   <Text style={styles.day}>{item.between}</Text>
                    <Text style={styles.day}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              )
             }}
              />
              <TouchableOpacity style={{backgroundColor:'rgb(5, 11, 127)',marginBottom:15,marginHorizontal:15,borderRadius:13,padding:16}}>
                <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Done</Text>
              </TouchableOpacity>
            </ScrollView>  
          </View>
          
        </Modal> 
        <Modal style={{margin:0,padding:0}}
          isVisible={!visible} 
          onBackButtonPress={()=>setVisible(!visible)}>
          <View style={{height:600,width:width,marginTop:150,borderRadius:10,backgroundColor:'rgb(255,255,255)'}}>
          <ScrollView>
            <Text style={{marginTop:15,fontSize:23,textAlign:'center',textTransform:'capitalize',color:'black',fontWeight:'500'}}>schedule your pickup </Text>
             <FlatList
             data={DayData}
             renderItem={ ({item})=>{
              return(
                <View>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                   <View style={styles.dayTimeView}>
                  <Text style={styles.day}>{item.day}</Text>
                  <Text style={styles.day}>{item.date}</Text>
                   </View>
                   <View style={styles.betweenView}>
                   <Text style={styles.day}>{item.between}</Text>
                    </View>
                  </View>
                </View>
              )
             }}
              />
              <TouchableOpacity style={styles.DoneTouch}
                onPress={()=>navigation.navigate('Schedule_pickup')}>
                <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Done</Text>
              </TouchableOpacity>
            </ScrollView>  
          </View>
        </Modal> 
       </View>
  )  
}
const styles=StyleSheet.create({ 
     dayView:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10,
        width:150,
        height:70,
        paddingVertical:10,
        marginTop:15,
        marginBottom:15,
        marginLeft:5
     },
     day:{
      fontSize:18,
      textAlign:'center',
      fontWeight:'500',
      color:'rgb(5, 11, 127)'
     },
     betweenView:{
      borderWidth:1,
      borderColor:'grey',
      borderRadius:10,
      width:190,
      height:70,
      paddingVertical:10,
      marginTop:15,
      marginLeft:15,
     },
     dayTimeView:{
      borderWidth:1,
      borderColor:'grey',
      borderRadius:10,
      width:160,
      height:70,
      paddingVertical:10,
      marginTop:15,
      marginBottom:15,
      marginLeft:5
    },
    DoneTouch:{
     backgroundColor:'rgb(5, 11, 127)',
     marginBottom:15,
     marginHorizontal:15,
     borderRadius:13,
     padding:10,
     marginBottom:20
   },
   Widthout:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderRadius:10,
    padding:18,
   marginHorizontal:10,
   borderWidth:1,
   marginTop:15
  },
  WidthoutPressed:{
      borderColor:'blue',
      borderWidth:2
  },
  schedulePickup:{
    fontSize:20,
    color:'black',
    textTransform:'capitalize',
    marginTop:4,
    fontWeight:'400',
    marginLeft:20
}
})

export default Items;