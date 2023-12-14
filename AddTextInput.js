import { View, Text,TextInput,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const AddTextInput = ({ placeholder,style,keyboardType, onChangeText,iconImage,placeholderTextColor, value,iconSource,numberOfLines,iconSources, secureTextEntry }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={iconSources} style={styles.icons} />
      <TextInput
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry} 
        keyboardType={keyboardType}
      />
      
       <TouchableOpacity  style={styles.iconContainer}> 
      <Image source={iconSource} style={styles.iconsearch} />
      </TouchableOpacity> 
      <TouchableOpacity>
      <Image source={iconImage} style={styles.icon} />
     </TouchableOpacity> 
     
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 50,
      width:'92%',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      margin:15,
      borderRadius:10,
      fontSize:20,
      
    },
    iconContainer: {
      padding:22
    },
    icon: {
      position:'absolute',
      right:70,
      width: 20,
      height: 20,
      resizeMode:'contain',
      
    },
    iconsearch:{
        position:'absolute',
        right:70,
        width: 20,
        height: 18,
        resizeMode:'contain',
        marginTop:15
    },
    // icone: {
    //   position:'absolute',
    //   right:70,
    //   width: 20,
    //   height: 20,
    //   resizeMode:'contain',
    //   marginTop:10,
    
    // },
    icons: {
      position:'absolute',
      left:20,
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
  
  });
  
export default AddTextInput