import { StyleSheet, Text, View ,TouchableOpacity,Image, ScrollView, FlatList, Dimensions,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Guest_Dashboard = () => {
const navigation=useNavigation();
const{width,height}=Dimensions.get('window');
  const order=[
    {
      id:'1',
      image:require('./Image/wash.png'),
      name:'a loundry shop',
      on:'Ongoing',
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
      on:'Ongoing',
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
      wash:'washing'
    }
  ]
  return (
    <View >
       <ScrollView>
        <Text style={{fontSize:17,marginTop:15,marginLeft:10,color:'black'}}>Hi</Text>
      <Text style={{fontSize:17,marginTop:4,color:'black',marginLeft:10}}>Good morning John! </Text>
      <View style={[styles.TouchableOpacity]}>
        <View >
         <TouchableOpacity style={{backgroundColor:'orange',marginLeft:10,marginTop:8,borderRadius:7}}>
            <Text style={{color:'black',fontSize:16,textAlign:'center',}}>Freshly clean clothes </Text>
         </TouchableOpacity>
         <Text style={styles.expressWorld}>loundly services </Text>
         <Text style={styles.expressWorldText}>Get 10% off  </Text>
         <Text style={{marginLeft:19,fontSize:17,color:'white'}}>User Code</Text>
         <View style={{borderWidth:0.5,borderColor:'white',marginHorizontal:35}}>
         <Text style={{textTransform:'uppercase',fontSize:17,marginLeft:10,color:'white'}}>dryfirst01</Text>
         </View>
         </View>
         <Image style={styles.imageWash} source={require('./Image/Vector(12).png')}/>
       </View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <View style={{flexDirection:'row',marginTop:22,}}>
         <View style={{flexDirection:'row',backgroundColor:'rgb(234, 175, 214)',justifyContent:'space-between',marginLeft:12,borderRadius:8,width:150,height:100}}>
          <View>
            <Text style={styles.man}>Avaible</Text>
            <Text style={styles.mans}>balance</Text>
            <Text style={styles.mans}>rm 199.00</Text>
            </View>
            <View>
            <Image style={styles.manImage}  source={require('./Image/Group1911.png')}/>
            <Image style={styles.manImage2} source={require('./Image/Group1896.png')}/>
            </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'rgb(229, 197, 218)',justifyContent:'space-between',marginLeft:12,borderRadius:8,width:120,height:100}}>
          <View>
          <TouchableOpacity>
            <Text style={styles.man}>Total</Text>
            <Text style={styles.mans}>Order</Text>
            <Text style={styles.mans}>52.00</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Image style={styles.manImage}  source={require('./Image/Group1912.png')}/>
            <Image style={styles.manImage2} source={require('./Image/Group1896.png')}/>
            </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'rgb(153, 196, 201)',justifyContent:'space-between',marginLeft:12,borderRadius:8,width:130,height:100}}>
          <View>
          <TouchableOpacity>
            <Text style={styles.man}>Total</Text>
            <Text style={styles.mans}>Points</Text>
            <Text style={styles.mans}>150</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Image style={styles.manImage}  source={require('./Image/Group1914.png')}/>
            <Image style={styles.manImage2} source={require('./Image/Group1896.png')}/>
            </View>
            </View>
          </View>
          </ScrollView>

          <View style={{flexDirection:'row',marginTop:22,}}>
         <View style={{flexDirection:'row',backgroundColor:'rgb(213, 239, 242)',justifyContent:'space-between',marginLeft:12,borderRadius:8,width:180,height:100}}>
          <View>
            <Text style={styles.man}>Invite</Text>
            <Text style={styles.manReward}>friends</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('InviteYourFriends')}>
            <Image style={styles.manImage2} source={require('./Image/Group1896.png')}/>
           </TouchableOpacity>
            </View>
            <View>
            <Image style={styles.manImageReward}  source={require('./Image/Group1915.png')}/>
            </View>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'rgb(213, 239, 242)',justifyContent:'space-between',marginLeft:12,borderRadius:8,width:180,height:100}}>
          <View>
          
            <Text style={styles.man}>Redeem</Text>
            <Text style={styles.manReward}>Rewards</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Top_up')}>
            <Image style={styles.manImage2} source={require('./Image/Group1896.png')}/>
            </TouchableOpacity>
            </View>
            <View>
            <Image style={styles.manImageReward}  source={require('./Image/redeem.png')}/>
            </View>
            </View>
            </View>
       <View style={{flexDirection:'row',marginTop:28,marginHorizontal:18}}>
        <TouchableOpacity style={{backgroundColor:'rgb(3, 27, 163)',paddingHorizontal:17,padding:8,borderRadius:10}}
         onPress={()=>navigation.navigate('Schedule_pickup') }>
          <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Puckup & delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DropTouch}>
          <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Sell & Drop</Text>
        </TouchableOpacity>
       </View>
       <View style={{width:'90%',height:180,marginTop:25,marginLeft:20,alignItems:'center',justifyContent:'center',borderRadius:10,borderWidth:0.5,borderColor:'blue'}}>
        <Text style={{fontSize:21,textAlign:'center',color:'black'}} >Add your address and book your order</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image style={{width:35,height:35,resizeMode:'contain'}} source={require('./Image/location1.webp')}/>
          <Text style={{fontSize:17,color:'bue',fontWeight:'600'}}>set your address </Text>
        </View>
        <View>
        <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:70,padding:10,borderRadius:8,marginTop:15,}}
         onPress={()=>navigation.navigate('DeliveryAddress')}>
          <Text style={{textAlign:'center',fontSize:19,color:'white'}}>Order now</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{backgroundColor:'rgb(229, 248, 249)'}}>
        <Text style={{fontSize:28,marginLeft:20,color:'black',fontWeight:'700'}}>Recent order</Text>
        
        <FlatList 
        data={order}
        keyExtractor={ (item)=>item.id}
        renderItem={ ({item})=>{
          return(
            <View style={{borderWidth:0.8,borderColor:'black',backgroundColor:'white',margin:10,paddingVertical:13}}>
              <View style={{flexDirection:'row',marginLeft:12,}}>
                <Image source={item.image}/>
                <View>
                  <View style={{flexDirection:'row',marginLeft:12,}}>
                  <Text style={{fontSize:20,color:'black',fontWeight:'700',textTransform:'capitalize'}}> {item.name}</Text>
                  <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:15,borderRadius:6,marginLeft:17}}>
                    <Text style={{marginLeft:0,fontSize:18,textAlign:'center',color:'white'}}>{item.on}</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:12}}>
                    <Image style={{marginTop:3}}  source={item.image1} />
                    <Text style={{marginLeft:3}}>{item.date}</Text>
                    <Image style={{marginLeft:27,marginTop:5}}  source={item.image2} />
                    <Text style={{marginLeft:12}}>{item.time}</Text>
                  </View>
                  <Text style={{marginLeft:17}}>{item.rm}</Text>
                </View>
              </View>
              <View style={{borderTopWidth:0.5,marginHorizontal:20,marginTop:15}}>
                <Text style={{textAlign:'center',marginTop:12}}>{item.wash}</Text>
              </View>
            </View>
          )
        }}
        />
        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:8,height:120,marginTop:20,marginHorizontal:20,borderWidth:0.5,borderColor:'grey'}}>
          <Image style={{height:90,width:90,resizeMode:'contain'}} source={require('./Image/Group2023.png')} />
          <View>
            <Text style={{color:'black',textAlign:'center',fontSize:20,marginTop:15}}> Checkout our price list </Text>
            <Text style={{color:'black',textAlign:'center',fontSize:17,}}>  lorem ipsum simple is dummy 
             {"\n"} text in the printing </Text>
          </View>
        </View>
       <View style={{flexDirection:'row',width:'90%',borderRadius:8,height:120,marginTop:20,marginHorizontal:20,backgroundColor:'rgb(13, 62, 196)',marginBottom:30}}>
        <Image style={{marginLeft:10}} source={require('./Image/FrameSound.png')}/>
        <View style={{marginLeft:15}}>
        <Text style={{color:'white',fontSize:18,marginTop:13}}>Refer with friends and earn {"\n"}
         credit vouchers</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('InviteYourFriends')}>
          <Text style={{color:'white',fontSize:17,textDecorationLine:'underline',marginTop:8}}>refer now</Text>
        </TouchableOpacity>
        </View>
       </View>
       <View style={{flexDirection:'row',backgroundColor:'rgb(234, 252, 255)',borderColor:'rgb(234, 252, 255)',borderWidth:0.2,margin:13,borderRadius:7,paddingBottom:10,marginBottom:20}}>
        <View>
          <Text style={{fontSize:18,color:'black',fontWeight:'500',marginLeft:12,marginTop:8,}}>purchase bundle package</Text>
          <Text style={{fontSize:17,color:'black',fontWeight:'500',marginLeft:12,marginTop:3}}>get 10% Flat off</Text>
          <Text style={{color:'black',fontWeight:'500',marginLeft:12,marginTop:3}}>T&c apply</Text>
        </View >
        <TouchableOpacity style={{backgroundColor:'rgb(234, 252, 255)',marginLeft:28,marginTop:28,borderRadius:6,height:30,paddingHorizontal:12,borderWidth:1,borderColor:'blue'}}>
          <Text style={{fontSize:19,textAlign:'center',color:'blue',}}>Grab now</Text>
        </TouchableOpacity>
       </View>
       </View>
       </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    TouchableOpacity:{
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'rgb(3, 27, 163)',
        borderColor:'black',
        borderWidth:0.5,
        marginTop:13,
        marginHorizontal:12,
        borderRadius:10,
        
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
        color:'blue',
        marginLeft:6,
        fontSize:17,
        marginTop:7,
        textTransform:'capitalize'
      },
      mans:{
        color:'white',
        marginLeft:6,
        fontSize:17,
        marginTop:7,
        textTransform:'capitalize'
      },
      manReward:{
        color:'black',
        marginLeft:6,
        fontSize:17,
        marginTop:7,
        textTransform:'capitalize'
      },
      manImageReward:{
        width:50,
        height:50,
        marginTop:22,
        marginRight:15
      },
      imageWash:{
        resizeMode:'cover',
        height:170,
        borderRadius:10
      },
      DropTouch:{
        backgroundColor:'grey',
        marginLeft:12,
        paddingHorizontal:38,
        padding:8,
        borderRadius:20,
      },
      manImage:{
        width:35,
        height:35,
        marginVertical:10,
        marginRight:10,
      },
      manImage2:{
        width:35,
        height:35,
        marginRight:10,
      }
})

export default Guest_Dashboard;

