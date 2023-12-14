import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'

const TextInputCustom = ({placeholder,value,onChangeText,image}) => {
  return (
    <View style={{ }}>
        <Image style={styles.Image} source={image} />
       <TextInput
        style={styles.backName}
        placeholder={placeholder}
       value={value}
       onChangeText={onChangeText}
        />
    </View>
  )
}

export default TextInputCustom;

const styles = StyleSheet.create({
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
    Image:{
      width:30,
      height:20,
      resizeMode:'contain',
      position:'relative',
      top:50,
      left:330,
    }
})
