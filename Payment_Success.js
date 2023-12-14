import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const Payment_Success = ({navigation}) => {
  const{width,height}=Dimensions.get('window')
  return (
    <View style={{backgroundColor:'rgb(255,255,255)',height}}>
      <Image style={styles.Image} source={require('./Image/Group1909.png')}/>
      <View style={styles.ImageView}>
        <View style={styles.ImageSuccessView}>
        <View>
        <Image style={styles.ImageSuccess}  source={require('./Image/Frame111.png')}/>
        </View>
        <Text style={styles.thankyou}>thank you</Text>
        <Text style={styles.PaymentSuccess}>Payment success</Text>
        <Text style={styles.textPayment}>
        Lorem Ipsum is simply dummy text
         of the printing and typesetting 
         industry. Lorem Ipsum has been 
         the industry's standard dummy 
         text ever since the 1500s,
        </Text>
        <TouchableOpacity style={styles.TouchableOpacity}
         onPress={()=>navigation.navigate('Checkout')}>
            <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      </View>

      <Image style={styles.UnderImage} source={require('./Image/Group1908.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    Image:{
         position:'absolute',
         top:0,
         right:0
    },
    ImageView:{
      height:720,
      borderRadius:10,
      borderWidth:1.9,
      borderBottomWidth:0.1,
      borderColor:'rgb(44, 201, 244)',
      marginHorizontal:13,
      marginTop:30

    },
    ImageSuccessView:{
         flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ImageSuccess:{
        width:140,
        height:140,
        resizeMode:'contain',
       
    },
    thankyou:{
        fontSize:27,
        textTransform:'capitalize',
        textAlign:'center',
        color:'rgb(1, 20, 117)',
        fontWeight:'600'
    },
    textPayment:{
        fontSize:15,
        textTransform:'capitalize',
        textAlign:'center',
        marginHorizontal:20,
        color:'black'
    },
    PaymentSuccess:{
        fontSize:18,
        textTransform:'capitalize',
        textAlign:'center',
        color:'rgb(1, 20, 117)',
        fontWeight:'500'
    },
   UnderImage:{
    position:'absolute',
    bottom:0,
    right:0
},
TouchableOpacity:{
    backgroundColor:'rgb(5, 11, 127)',
    padding:13,
    paddingHorizontal:120,
    marginTop:20,
    borderRadius:13
},
done:{
    textAlign:'center',
    fontSize:20,
    color:'white',
}

}
)

export default Payment_Success;
