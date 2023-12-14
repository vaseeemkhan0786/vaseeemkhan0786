import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,TextInput, FlatList,Dimensions} from 'react-native'
import React,{useState} from 'react';


const Top_up = ({navigation}) => {
    const[amount,setAmount]=useState('');
    const[able,setAble]=useState(false)
    const[abail,setAbain]=useState(false);
    const[data,setData]=useState([
         {id:1,number:10,},
         {id:2,number:20,},
         { id:3,number:30,},
        ])
    // const submit=()=>{
    //     setAble(true)
    //     setAbain(false)
    // }
    const submit2=()=>{
        
        setAbain(true)
    }
   
        const numbers=[{
            id:1,
            number:40,
        },
        {
            id:2,
            number:50,
        },
        {
            id:3,
            number:60,
        },
    ]
    const data1=[
        {
            id:1,
            card:'credit card'
        },
        {
            id:2,
            card:'eWallet'
        }
    ]
    const{height,width}=Dimensions.get('window')
  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)'}}>
    <ScrollView showsVerticalScrollIndicator={true}>
    <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
   <TouchableOpacity onPress={()=>navigation.navigate('Payment_Method')}>
     <Image style={{borderRadius:30}} source={require('./Image/NextButton.png')} />
   </TouchableOpacity>
   <Text style={styles.Top}>Top up</Text>
     </View>
     <TextInput 
     style={styles.TopTextInput}
     placeholder='Enter top up amount'
     value={amount}
     onChangeText={(amount)=>setAmount(amount)}
     />
     <Text style={styles.TopAmount}>Whole amount between RM 10 To RM 200</Text>
     {/* <View style={{flexDirection:'row',marginHorizontal:25}}>
        <TouchableOpacity>
        <View style={[styles.reward,{backgroundColor:'rgb(5,11,217)'}]}>
            <Text style={styles.number}>10</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.reward}>
            <Text style={styles.number}>20</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.reward}>
            <Text style={styles.number}>30</Text>
        </View>
        </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',marginHorizontal:25}}>
     <TouchableOpacity>
        <View style={styles.reward}>
            <Text style={styles.number}>40</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.reward}>
            <Text style={styles.number}>50</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.reward}>
            <Text style={styles.number}>60</Text>
        </View>
        </TouchableOpacity>
     </View> */}
     <FlatList 
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
            <View style={{marginHorizontal:10,marginLeft:30}}>
                <TouchableOpacity style={{ backgroundColor:'rgb(5,17,127)', padding: 10, margin: 5 }}>                    
                <Text style={styles.number}>{item.number}</Text>
                </TouchableOpacity>                
            </View>
        )
      }}
     />
      <FlatList 
      data={numbers}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
            <View style={{flexDirection:'row',marginHorizontal:10,marginLeft:30}}>
                <TouchableOpacity onPress={submit2}>
                <View style={[styles.reward,{backgroundColor:abail?'rgb(5, 11, 127)':'white'}]}>
                <Text style={[styles.number,{color:abail?'white':'black'}]}>{item.number}</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
      }}
     />
     <View style={styles.GetView}>
        <Text style={styles.RM30}>Top up RM 30 and more</Text>
        <Text style={styles.Get}>Get 10% off</Text>
     </View>
     <Text style={styles.payment}>Payment method</Text>
      <FlatList 
      data={data1}
      renderItem={ ({item})=>{
        <View style={styles.Hello}>
            <Text>{item.card}</Text>
            <TouchableOpacity>
             <View style={styles.outer}>
                <View style={styles.inner}></View>
             </View>
            </TouchableOpacity>
        </View>
      }}/>
            <View style={{marginBottom:40}}>
            <View style={styles.visa}>
            <View style={styles.VisaView}>
            <Text style={styles.VisaText}>VISA</Text>
            </View>
            <View style={{marginLeft:10}}>
            <Text>HSBS BANK</Text>
            <Text>xxxx xxxx xxxx 1502</Text>
            </View>
            </View>
            <View style={styles.visa}>
            <Image source={require('./Image/Group1903.png')}/>
            </View>
            <View style={styles.AddView}>
                <Text style={styles.Addnew}>Add new card</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.TopUpNowTouchable}>
              <Text style={styles.TopUpNow}>Top up now</Text>
            </TouchableOpacity>
        </ScrollView>
     </View>
  )
}
const styles = StyleSheet.create({
    Top:{
    fontSize:23,
    color:'black',
    fontWeight:'400',
    marginLeft:110,
    marginTop:4,
    textTransform:'capitalize',
    },
    TopTextInput:{
        fontSize:20,
        color:'black',
        fontWeight:'400',
        marginHorizontal:20,
        paddingHorizontal:20,
        marginTop:20,
        borderWidth:.2,
        borderRadius:5
    },
    TopAmount:{
        fontSize:15,
        marginHorizontal:20,
        color:'rgb(89, 173, 242)',
        marginTop:15
    },
    itemView:{
        flexDirection:'row',
        borderWidth:.3,
        borderColor:'grey',
        borderRadius:7,
        
    },
    item:{
        fontSize:20,
        textAlign:'center',
        color:'rgb(5, 11, 127)'
    },
    number:{
       fontSize:20,
       textAlign:'center',
       marginTop:4,
    },
    reward:{
       width:75,
       height:36,
       borderWidth:0.7,
       borderRadius:8,
       borderColor:'grey',
       marginTop:20,
       marginLeft:0
    },
    GetView:{
        borderRadius:10,
        backgroundColor:'rgb(89, 173, 242)',
        padding:20,
        marginHorizontal:15,
        marginTop:15
    },
    RM30:{
        fontSize:14,
        textAlign:'center',
        color:'white',
    },
    Get:{
        fontSize:20,
        textAlign:'center',
        color:'white',
    },
    payment:{
        fontSize:19,
        marginLeft:15,
        marginTop:20,
        color:'black'
    },
    visa:{
        flexDirection:'row',
        borderRadius:10,
        marginTop:22,
        borderWidth:0.5,
        borderColor:'blue',
        padding:10,
        marginHorizontal:20,
    },
    AddView:{
        borderRadius:7,
        marginTop:20,
        borderWidth:0.3,
        borderColor:'grey',
        padding:10,
        marginHorizontal:20,
    },
    Addnew:{
        fontSize:20,
        color:'rgb(5, 11, 127)',
        textAlign:'center',
        fontWeight:'500',
        textTransform:'capitalize'
    },
    VisaView:{
        flexDirection:'row',
        borderRadius:7,
        borderWidth:0.7,
        borderColor:'grey',
        backgroundColor:'rgb(234, 252, 252)',
        padding:5,
        
    },
     VisaText:{
     fontSize:14,
     color:'blue',
     marginTop:3,
   },
    outer:{
    width:15,
    height:15,
    borderRadius:8,
    borderColor:'blue',
    borderWidth:1,
   },
    inner:{
    width:14,
    height:14,
    borderRadius:8,
    borderColor:'blue',
    borderWidth:8,
   },
   TopUpNowTouchable:{
    backgroundColor:'rgb(5, 11, 102)',
    borderRadius:12,
    padding:11,
    marginHorizontal:20
   },
   TopUpNow:{
      marginTop:2,
      color:'white',
      fontSize:20,
      textAlign:'center'
   }
})

export default Top_up;

