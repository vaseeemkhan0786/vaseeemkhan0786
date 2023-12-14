import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

const MyOrder = () => {
    const[deliver,setDeliver]=useState('')
    const submit=()=>{
            setDeliver('Delivered')
    }
    
    
    const order=[
        {
          id:'1',
          image:require('./Image/wash.png'),
          name:'a loundry shop',
          on:'    Ongoing',
          image1:require('./Image/date.png'),
          date:"12 july 2023",
          image2:require('./Image/clock-circle.png'),
          time :'2:13 pm',
          rm: 'rm 50.00',
          wash:'washing'
        }, {
          id:'2',
          image:require('./Image/wash.png'),
          name:'a loundry shop',
          on:'    Ongoing',
          image1:require('./Image/date.png'),
          date:"12 july 2023",
          image2:require('./Image/clock-circle.png'),
          time :'2:13 pm',
          rm: 'rm 50.00',
          wash:'washing'
        },
        {
          id:'3',
          image:require('./Image/wash.png'),
          name:'a loundry shop',
          on:'compalete',
          image1:require('./Image/date.png'),
          date:"12 july 2023",
          image2:require('./Image/clock-circle.png'),
          time :'2:13 pm',
          rm: 'rm 50.00',
          wash:'delivered',
          repeatImage:require('./Image/Group2032.png'),
          repeat:'repeat order'
        },
        {
            id:'4',
            image:require('./Image/wash.png'),
            name:'a loundry shop',
            on:'compalete',
            image1:require('./Image/date.png'),
            date:"12 july 2023",
            image2:require('./Image/clock-circle.png'),
            time :'2:13 pm',
            rm: 'rm 50.00',
            wash:'delivered',
            repeatImage:require('./Image/Group2032.png'),
            repeat:'repeat order'
          }
      ]
      
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
    <ScrollView>
   <View style={{flexDirection:'row',marginTop:14,marginLeft:17}}>
    <TouchableOpacity onPress={ ()=>navigation.navigate('Services')}>
      <Image source={require('./Image/NextButton.png')} />
    </TouchableOpacity>
    <Text style={{fontSize:21,color:'black',marginLeft:105,marginTop:4,textTransform:'capitalize',fontWeight:'500'}}>
        my order
    </Text>
   </View>
      <FlatList 
        data={order}
        keyExtractor={ (item)=>item.id}
        renderItem={ ({item})=>{
          return(
            <View style={styles.imageView}>
              <View style={{flexDirection:'row',marginLeft:15,}}>
                <Image source={item.image}/>
                <View>
                  <View style={{flexDirection:'row',marginLeft:10,}}>
                  <Text style={styles.name}> {item.name}</Text>
                  <TouchableOpacity style={styles.OnTouch} onPress={submit}>
                    <Text style={styles.On}>{item.on}</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.image1View}>
                    <Image style={{marginTop:3}}  source={item.image1} />
                    <Text style={{marginLeft:3}}>{item.date}</Text>
                    <Image style={{marginLeft:27,marginTop:5}}  source={item.image2} />
                    <Text style={{marginLeft:12}}>{item.time}</Text>
                  </View>
                  <Text style={{marginLeft:17,textTransform:'uppercase',color:'rgb(13, 154, 224)'}}>{item.rm}</Text>
                </View>
              </View>
               <View style={styles.with}><Text></Text></View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={styles.TouchableOpacityOngoing}>
                <Text style={{textAlign:'center',color:'rgb(5, 11, 127)',textTransform:'capitalize'}}>{item.wash}</Text>
                </TouchableOpacity>
                <Image style={styles.repeatImage} source={item.repeatImage} />
                <TouchableOpacity>
                <Text style={styles.repeat}>{item.repeat}</Text>
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
    imageView:{
        borderWidth:0.8,
        borderColor:'grey',
        backgroundColor:'white',
        margin:10,
        paddingVertical:13,
        borderRadius:12
    },
    name:{
    fontSize:20,
    color:'black',
    fontWeight:'700',
    textTransform:'capitalize'
    },
    OnTouch:{
        backgroundColor:'orange',
        borderRadius:6,
        paddingRight:12,
        marginLeft:9
    },
    On:{
        fontSize:18,
        color:'white',
    },
    image1View:{
    flexDirection:'row',
    marginLeft:12,
    marginTop:12,
    },
    repeatImage:{
    marginTop:11,
    marginLeft:180
    },
    TouchableOpacityOngoing:{
    borderWidth:1,
    width:70,
    borderRadius:6,
    marginLeft:15
    },
    with:{
     borderTopWidth:0.5,
     marginHorizontal:15,
     marginTop:15
    },
    repeat:{
       color:'rgb(13, 154, 224)',
       marginRight:12,
       marginTop:6,
       textDecorationLine:'underline',
    }
    })

    export default MyOrder
