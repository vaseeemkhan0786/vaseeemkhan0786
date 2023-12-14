import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from './CustomTextInput';


const SelectStore = () => {
    const[search,setSearch]=useState('');
    const order=[
        {
          id:'1',
          image:require('./Image/wash.png'),
          name:'a loundry shop',
          image1:require('./Image/Vector(1).png'),
          kms:"936,kineah road,West Ned ",
          add:"kinesses",
          image2:require('./Image/clock-circle.png'),
          time :'10:00 am to 04 pm',
          km:require('./Image/km.png'),
          distance: '2km',
          wash:'Secect store'
        },
        {
            id:'2',
            image:require('./Image/wash.png'),
            name:'a loundry shop',
            image1:require('./Image/Vector(1).png'),
            kms:"936,kineah road,West Ned ",
            add:"kinesses",
            image2:require('./Image/clock-circle.png'),
            time :'10:00 am to 04 pm',
            km:require('./Image/km.png'),
            distance: '2km',
            wash:'Secect store'
          },
          {
            id:'3',
            image:require('./Image/wash.png'),
            name:'a loundry shop',
            image1:require('./Image/Vector(1).png'),
            kms:"936,kineah road,West Ned ",
            add:"kinesses",
            image2:require('./Image/clock-circle.png'),
            time :'10:00 am to 04 pm',
            km:require('./Image/km.png'),
            distance: '2km',
            wash:'Secect store'
          },
    ]
  return (
    <View>
     <ScrollView>
      <View style={styles.EntyPo}>
        <View style={styles.chav}>
        <Image source={require('./Image/NextButton.png')}/>
        </View>
        <View >
       <Text style={styles.service}>select your pickup offer </Text>
       </View>
       </View>
       <View style={{marginTop:30}}>
       <CustomTextInput 
         iconSources={require('./Image/search11.png')}
         placeholder={'search store location'}
         iconSource={require('./Image/fi-rr-target.png')}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
       />
       </View>
       <Text style={{fontSize:22,marginTop:10,marginLeft:10,color:'black',fontWeight:'700',textTransform:'capitalize'}}>Store near me</Text>
       <FlatList 
        data={order}
       // keyExtractor={ (id)=>item.id}
        renderItem={ ({item})=>{
          return(
            <View style={{borderWidth:0.8,borderColor:'black',backgroundColor:'white',margin:10,paddingVertical:13}}>
              <View style={{flexDirection:'row',marginLeft:12,}}>
                <Image source={item.image}/>
                <View>
                  <View style={{flexDirection:'row',marginLeft:12,}}>
                  <Text style={{fontSize:20,color:'black',fontWeight:'700',textTransform:'capitalize'}}> {item.name}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                    <Image style={{marginTop:3}}  source={item.image1} />
                    <Text style={{marginLeft:3}}>{item.kms}</Text>
                    <Text style={{marginLeft:3}}>{item.add}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                    <Image style={{marginTop:5}}  source={item.image2} />
                    <Text style={{marginLeft:3}}>{item.time}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                  <Image style={{marginTop:3}} source={item.km} />
                  <Text style={{marginLeft:3}}>{item.distance}</Text>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal:20,marginTop:7}}>
                <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',padding:13,borderRadius:10}}>    
                <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'600',textTransform:'capitalize'}}>{item.wash}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
        />
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    EntyPo:{
        flexDirection:'row',
        marginTop:18,
      },
      chav:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'blue',
        marginLeft:15,
      },
      service:{
        marginLeft:50,
        fontSize:22,
        color:'black',
        fontWeight:'600',
        textTransform:'capitalize',

      },
})


export default SelectStore;
