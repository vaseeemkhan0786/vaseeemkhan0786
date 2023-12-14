import { StyleSheet, Text, View,ScrollView,TextInput,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import TextInputCustom from './TextInputCustom'

const AddCard = ({navigation}) => {
    const{width,height}=Dimensions.get('window');
  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)',height}}>
      <ScrollView showsVerticalScrollIndicator={true}>
 <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
<TouchableOpacity onPress={()=>navigation.navigate('Payment_Method')}>
  <Image source={require('./Image/NextButton.png')} />
</TouchableOpacity>
<Text style={styles.AddCredit}>
     Add credit card
</Text>
</View>
<TextInput style={styles.backName} placeholder='Bank Name'/>
   {/* <TextInput style={styles.backName} placeholder='Card number '/>  */}
   <TextInputCustom 
   image={require('./Image/Mastercard.png')}
    placeholder='Card number'

   />
<View style={styles.bank}>
   <TextInput style={styles.CardDate} placeholder='Card date ' />
   <TextInput style={styles.cvv} placeholder='CVV '/>
</View>
   <TextInput style={styles.backName} placeholder='Card holder'/>
   <TouchableOpacity style={styles.saveTouch}>
    <Text style={styles.save}>save card </Text>
   </TouchableOpacity>
</ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    AddCredit:{
    fontSize:22,
    color:'black',
    fontWeight:'400',
    marginLeft:75,
    marginTop:4,
    textTransform:'capitalize',
},
backName:{
    fontSize:19,
    color:'black',
    fontWeight:'300',
    borderWidth:1,
    borderColor:'grey',
    marginHorizontal:18,
    marginTop:18,
    borderRadius:12,
    textTransform:'capitalize'
},
bank:{
    flexDirection:'row',
    marginHorizontal:18,
},
cvv:{
    fontSize:18,
    color:'black',
    fontWeight:'400',
    textTransform:'uppercase',
    borderWidth:1,
    borderColor:'grey',
    marginTop:18,
    borderRadius:10,
    width:168,
    marginLeft:20
},
CardDate:{
    fontSize:20,
    color:'black',
    fontWeight:'300',
    textTransform:'capitalize',
    borderWidth:1,
    borderColor:'grey',
   // marginHorizontal:18,
    marginTop:18,
    borderRadius:10,
    width:168
},
saveTouch:{
    borderRadius:12,
    padding:13,
    marginHorizontal:18,
    backgroundColor:'rgb(5, 11, 127)',
    marginTop:18,
},
save:{
    fontSize:19,
    color:'white',
    textAlign:'center',
    textTransform:'capitalize'
}
})

export default AddCard


