import React,{useState} from 'react';
import { TextInput, StyleSheet, View,TouchableOpacity,Image } from 'react-native';

const CustomTextInput = ({ placeholder,style,keyboardType, onChangeText,iconImage,placeholderTextColor, value,iconSource,numberOfLines,iconSources, secureTextEntry }) => {
  const [lock,setLock]=useState(false);
  const Hello=()=>{
      setLock(true);
  }
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
    
     <TouchableOpacity  style={styles.iconContainer} onPress={Hello}> 
    <Image source={iconSource} style={styles.icon} />
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
    marginTop:6,
    width: 20,
    height: 20,
    resizeMode:'contain',
    
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

});

export default CustomTextInput;
