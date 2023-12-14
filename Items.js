import { View, Text, TouchableOpacity,Image, Dimensions ,StyleSheet, FlatList, ScrollView} from 'react-native'
import React from 'react'


const Items = ({navigation}) => {
    const {width,height}=Dimensions.get('window');
    const cloth=[
        {
            id:'1',
            product:"wash dry & fold",
            image:require('./Image/Group2050.png'),
            sub:"-",
            number:"02",
            pulse:"+",
            rm:"RM 2g",
            save:"1%saving"
        },
        {
            id:'2',
            product:"dry & fold",
            image:require('./Image/Group2051.png'),
            sub:"-",
            number:"01",
            pulse:"+",
            rm:"RM 12",
            save:"1%saving"
        }
    ]
    const cloths=[
        {
            id:'1',
            product:"shart/T-shart/pants/blouse",
            image:require('./Image/Group2062.png'),
            sub:"-",
            number:"02",
            pulse:"+",
            rm:"RM 2g",
        },
        {
            id:'2',
            product:"skirt/baju melayu/blazzer",
            image:require('./Image/Group2057.png'),
            sub:"-",
            number:"02",
            pulse:"+",
            rm:"RM 12",
        },
        {
            id:'3',
            product:"dress/baju kurung",
            image:require('./Image/dress-6.png'),
            sub:"-",
            number:"01",
            pulse:"+",
            rm:"RM 12",
        },
        {
            id:'4',
            product:"skirt/baju melayu/blazzer",
            image:require('./Image/blankie.png'),
            sub:"-",
            number:"02",
            pulse:"+",
            rm:"RM 12",
        },
        {
            id:'5',
            product:"dress/baju kurung",
            image:require('./Image/blanket.png'),
            sub:"-",
            number:"01",
            pulse:"+",
            rm:"RM 12",
        }
    ]
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
        <ScrollView showsVerticalScrollIndicator={false} >
       <View style={{flexDirection:'row',marginTop:14,marginLeft:17}}>
        <TouchableOpacity onPress={ ()=>navigation.navigate('Services')}>
          <Image source={require('./Image/NextButton.png')} />
        </TouchableOpacity>
        <Text style={{fontSize:21,color:'black',marginLeft:105,marginTop:4,textTransform:'capitalize',}}>
            items
        </Text>
       </View>
       <View style={{flexDirection:'row',marginHorizontal:20,marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:'rgb(9, 29, 107)',padding:5,paddingHorizontal:10,borderRadius:8}}>
          <Text style={{fontSize:13,color:'white',textAlign:'center'}}>Wash Dry & Fold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'rgb(255,255,255)',borderRadius:8,padding:2,paddingHorizontal:24,marginLeft:13,borderWidth:1,borderColor:'grey'}}>
          <Text style={{fontSize:14,color:'black',textAlign:'center'}}>Ironing</Text>
        </TouchableOpacity>
       </View>
       <View style={{marginLeft:25}}>
            <Text style={styles.wash}>wash dry & fold</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,marginRight:17,padding:10,backgroundColor:'rgb(201, 239, 237)',borderRadius:10,}}>
            <Text style={styles.cetegory}>cetegory</Text>
            <Text style={styles.cetegory}>quantity bag</Text>
            <Text style={styles.cetegory}>price</Text>
        </View>
        <Text style={{fontSize:12,marginTop:10}}>Please add loundry bag according to cloths quantity</Text>
       </View>
       
       <FlatList 
       data={cloth}
       renderItem={ ({item})=>{
        return(
            <View style={{marginLeft:17}}>
                <View style={styles.productView}>
                    <Text style={styles.ProductText}>{item.product}</Text>
                    <View style={styles.ImageView}>
                        <Image style={styles.Image} source={item.image}/>
                        <View style={styles.subView}>
                         <Text style={styles.sub}>{item.sub}</Text>
                         </View>
                         <View style={styles.numberView}>
                         <Text style={styles.number}>{item.number}</Text>
                         </View>
                         <View style={styles.pulseView}>
                         <Text style={styles.pulse}>{item.pulse}</Text>
                         </View>
                         <View style={styles.rmView}>
                            <Text style={styles.rm}>{item.rm}</Text>
                            <Text style={styles.save}>{item.save}</Text>
                         </View>
                    </View>
               </View>
           </View>
        )
       }}
       />
       <View style={{marginLeft:25}}>
            <Text style={styles.wash}>ironing</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,marginRight:17,padding:10,backgroundColor:'rgb(201, 239, 237)',borderRadius:10,}}>
            <Text style={styles.cetegory}>cetegory</Text>
            <Text style={styles.cetegory}>quantity bag</Text>
            <Text style={styles.cetegory}>price</Text>
        </View>
       </View>
       <FlatList 
       data={cloth}
       renderItem={ ({item})=>{
        return(
            <View style={{marginLeft:17}}>
                <View style={styles.productView}>
                    <Text style={styles.ProductText}>{item.product}</Text>
                    <View style={styles.ImageView}>
                        <Image style={styles.Image} source={item.image}/>
                        <View style={styles.subView}>
                         <Text style={styles.sub}>{item.sub}</Text>
                         </View>
                         <View style={styles.numberView}>
                         <Text style={styles.number}>{item.number}</Text>
                         </View>
                         <View style={styles.pulseView}>
                         <Text style={styles.pulse}>{item.pulse}</Text>
                         </View>
                         <View style={styles.rmView}>
                            <Text style={styles.rm}>{item.rm}</Text>
                         </View>
                    </View>
               </View>
           </View>
        )
       }}
       />

       </ScrollView>
    </View>

  )
}
const styles=StyleSheet.create({
    wash:{
        fontSize:16,
        textTransform:'capitalize',
        color:'black',
        fontWeight:'500',
        marginTop:21,
       
    },
    cetegory:{
        color:'black',
        fontWeight:'400',
        textTransform:'capitalize',
        
    },
    productView:{
        backgroundColor:'rgb(255,255,255)',
        marginRight:17,
        marginTop:17,
        borderRadius:10,
        color:'black',
        borderWidth:.2,
        borderColor:'grey'
    },
    ProductText:{
        color:'black',
        fontWeight:'400',
        marginTop:10,
        marginLeft:27,
        fontSize:14,
        textTransform:'capitalize'
    },
    ImageView:{
        marginTop:16,
        borderRadius:10,
        color:'black',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:20,
    },
    Image:{
    },
    numberView:{
        backgroundColor:'rgb(230, 244, 242)',
        marginLeft:13,
        color:'black',
        width:44,
        height:25,
        borderRadius:4,
        marginTop:10
    },
    number:{
       fontSize:15,
       textAlign:'center',
       color:'black',
       marginTop:2
    },
    subView:{
        backgroundColor:'rgb(9, 29, 107)',
        marginLeft:13,
        width:25,
        height:25,
        borderRadius:4,
        marginTop:10
        
    },
    sub:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        
    },
    
    pulseView:{
        backgroundColor:'rgb(9, 29, 107)',
        marginLeft:13,
        width:25,
        height:25,
        borderRadius:4,
        marginTop:10
    },
    pulse:{
        textAlign:'center',
        color:'white',
        fontSize:18,
    }
})
export default Items