import { Image, ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React,{useState} from 'react'
import AddTextInput from './AddTextInput';

const NewAddress = () => {
    const[search,setSearch] =useState('');
    const[note,setNote] =useState('');
  return (
    <View> 
     <ScrollView>
      <View style={styles.EntyPo}>
        <View style={styles.chav}>
        <Image source={require('./Image/NextButton.png')}/>
        </View>
        <View >
       <Text style={styles.service}>add new address</Text>
       </View>
       </View>
       <ImageBackground style={{height:420,marginTop:10}} source={{uri:'https://img.freepik.com/premium-vector/colored-city-map-digital-concept_23-2148311690.jpg'}}>
       <View style={{marginTop:30}}>
       <AddTextInput
         iconSources={require('./Image/search11.png')}
         placeholder={'search store location'}
         iconSource={require('./Image/fi-rr-target.png')}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.inputs}

       />
       </View>
       </ImageBackground>
       <View style={{backgroundColor:'fff'}}>
       <AddTextInput
         placeholder={'Type Of Address'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
         placeholderTextColor={'black'}
         iconImage={require('./Image/Vector.png')}
       />
       <AddTextInput
         placeholder={'House/Buildin No.'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'Street Address'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'Street Address (option2)'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'city'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'State'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'PostCode'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
         numberOfLines={3}
       />
       <AddTextInput
         placeholder={'Mobile number'}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
         style={styles.input}
       />
       <AddTextInput
         placeholder={'Note To Drive'}
         value={note}
         onChangeText={ (note)=>setNote(note)} 
         numberOfLines={3}
       />
       <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',marginTop:23,padding:12,borderRadius:10,marginHorizontal:10}}>
        <Text style={{color:'white',fontSize:21,textAlign:'center'}}>submit</Text>
       </TouchableOpacity>
       </View>
       </ScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({
    EntyPo:{
        flexDirection:'row',
        marginTop:15,
      },
      chav:{
        borderRadius:15,
        marginLeft:15,
      },
      service:{
        marginLeft:55,
        fontSize:22,
        color:'black',
        fontWeight:'500',
        textTransform:'capitalize',

      },
      inputs: {
        height: 50,
        width:'92%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal:35,
        margin:15,
        borderRadius:10,
        fontSize:20,
        
      },
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
})

export default NewAddress
