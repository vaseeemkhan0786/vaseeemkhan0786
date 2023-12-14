import { StyleSheet, Text, View,Image, ImageBackground,ScrollView,
    FlatList,TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from './CustomTextInput'

const NearByStore = () => {
    const [search,setSearch]=useState('');
    const order=[
        {
          id:'1',
          image:require('./Image/Rectangle22.png'),
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
            image:require('./Image/Rectangle22.png'),
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
            image:require('./Image/Rectangle22.png'),
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
    const {width,height}=Dimensions.get('window');
  return (
    <View>
       <View style={styles.EntyPo}>
        <View style={styles.chav}>
        <Image source={require('./Image/NextButton.png')}/>
        </View>
        
        <View >
       <Text style={styles.service}>select your pickup offer </Text>
       </View>
       </View>
       <ImageBackground style={{height:height,marginTop:10}} source={require('./Image/google.png')}>
       <View style={{marginTop:30}}>
       <CustomTextInput 
         iconSources={require('./Image/search11.png')}
         placeholder={'search store location'}
         iconSource={require('./Image/fi-rr-target.png')}
         value={search}
         onChangeText={ (search)=>setSearch(search)} 
       />
       </View>
       <ScrollView  style={{marginTop:240}}>
           <FlatList 
         data={order}
         showsHorizontalScrollIndicator={false} 
         horizontal={true}
         keyExtractor={ (item)=>item.id}
         renderItem={ ({item})=>{
          return(
            <View style={{borderWidth:0.8,borderColor:'black',borderRadius:10,backgroundColor:'white',marginVertical:20,marginLeft:18,padding:18}}>
              {/* <View style={{width:'95%',marginLeft:10}}> */}
              <View style={{flexDirection:'row',marginLeft:15,width:'90%'}}>
                <Image source={item.image}/>
                <View>
                  <View style={{flexDirection:'row',marginLeft:12,}}>
                  <Text style={{fontSize:20,color:'black',fontWeight:'700',textTransform:'capitalize'}}> {item.name}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                    <Image style={{marginTop:3}}  source={item.image1} />
                    <View>
                    <Text style={{marginLeft:3,fontSize:15}}>{item.kms}</Text>
                    <Text style={{marginLeft:3,fontSize:15}}>{item.add}</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                    <Image style={{marginTop:5}}  source={item.image2} />
                    <Text style={{marginLeft:3,fontSize:15}}>{item.time}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                  <Image style={{marginTop:3,fontSize:15}} source={item.km} />
                  <Text style={{marginLeft:3,fontSize:15}}>{item.distance}</Text>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal:15,marginTop:20}}>
                <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',padding:13,borderRadius:10}}>    
                <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'600',textTransform:'capitalize'}}>{item.wash}</Text>
                </TouchableOpacity>
              </View>
              </View>
            // </View>
          )
        }}
        />
        </ScrollView>
        </ImageBackground>
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

export default NearByStore
