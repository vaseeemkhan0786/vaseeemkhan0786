import { Image, StyleSheet, Text, ScrollView, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import EntyPo from 'react-native-vector-icons/Entypo'

const Service = ({navigation}) => {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.EntyPo}>
        <View style={styles.chav}>
        <TouchableOpacity onPress={ ()=>navigation.navigate('PriceList')}>
        <View style={styles.chav}>
        <Image source={require('./Image/NextButton.png')} />
        </View>
        </TouchableOpacity>
        </View>
        <View >
       <Text style={styles.service}>Services</Text>
       </View>
       </View>
       <View style={styles.touchable}>
        <Image style={styles.image} source={require('./Image/express.png')}/>
        <TouchableOpacity style={styles.expTouch}>
         <Text style={styles.express}>need "Express service" </Text>
        </TouchableOpacity>
       </View>
       <View style={styles.TouchableOpacity}>
        <View >
         <Text style={styles.expressWorld}>wash dry & fold </Text>
         <Text style={styles.expressWorldText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.man}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image style={styles.imageWash} source={require('./Image/Group1826.png')}/>
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
         <Image style={styles.imageWash} source={require('./Image/Group1830.png')}/>
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
         <Image style={styles.imageWash} source={require('./Image/Group1831.png')}/>
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
        <View >
         <Text style={styles.expressWorldDry}> household</Text>
         <Text style={styles.expressWorldDryText}>lorem ispsum is simpale {"\n"}
          dummy text of the printing </Text>
          <TouchableOpacity>
            <Text style={styles.manText}>read more </Text>
          </TouchableOpacity>
         </View>
         <Image style={styles.imageWash} source={require('./Image/Group1833.png')}/>
       </View>
       <TouchableOpacity style={styles.countinues}>
        <Text style={styles.countinuesText}>Countine</Text>
       </TouchableOpacity>
       <View style={styles.others}>
        <Text style={styles.othersText}>for others services</Text>
        <View style={styles.contactUs}>
       <TouchableOpacity>
        <Text style={styles.contactUsText}>Contact Us</Text>
       </TouchableOpacity>
       </View>
       </View>
       </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  EntyPo:{
    flexDirection:'row',
    marginTop:12,
  },
  chav:{
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:8,
  },
  service:{
    marginLeft:133,
    fontSize:19,
    color:'black',
    fontWeight:'400',
    marginTop:5,
  },
  touchable:{
    flexDirection:'row',
    height:80,
    borderColor:'black',
    borderWidth:0.5,
    marginHorizontal:10,
    marginTop:18,
    borderRadius:15,
  },
  image:{
     width:60,
     height:60,
    marginTop:6,
  },
  express:{
    fontSize:20,
    textAlign:'center',
    color:'rgb(5, 11, 127)',
    marginTop:6,
    textTransform:'capitalize'
    
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
    borderRadius:15,
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
  TouchableOpacity2:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:0.5,
    marginHorizontal:10,
    marginTop:23,
    borderRadius:15
  },
  expressWorldDry:{
    fontSize:22,
    color:'black',
    marginLeft:15,
    marginTop:6,
    textTransform:'capitalize'
  },
  expressWorldDryText:{
    fontSize:17,
    marginTop:7,
    marginLeft:15,
  },
  manText:{
    color:'blue',
    marginLeft:15,
    fontSize:17,
    marginTop:7,
    textDecorationLine:'underline',
    textTransform:'capitalize'
  },
  others:{
    flexDirection:'row',
    marginHorizontal:15,
    backgroundColor:"rgb(5, 136, 183)",
    borderRadius:10,
    marginTop:17,
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
    fontWeight:'500',
    padding:3,
    paddingHorizontal:10
  },
  contactUs:{
    borderWidth:1.5,
    borderColor:'rgb(5, 11, 127)',
   // marginTop:10,
    marginLeft:60,
    borderRadius:10,
  },
  countinues:{
    backgroundColor:'rgb(3, 27, 163)',
    marginHorizontal:18,
    padding:10,
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
