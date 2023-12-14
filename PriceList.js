import { StyleSheet, Text, View,FlatList,Image,ScrollView,
  TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React,{useEffect, useState,useRef} from 'react'

const PriceList = ({navigation}) => {
    const[button,setButton]=useState(true)
    const[button2,setButton2]=useState(false)
    const[button3,setButton3]=useState(false)
    const[button4,setButton4]=useState(false)
    const[isPressed,setPressed]=useState(false)
    const ScrollViewRef=useRef();

    const HomePage=(height)=>{
      if(ScrollViewRef.current)
      ScrollViewRef.current.scrollTo({y:height, animated:true});
  }
  const HomePage2=(height)=>{
    if(ScrollViewRef.current)
    ScrollViewRef.current.scrollTo({y:height, animated:true});
}
const HomePage3=(height)=>{
  if(ScrollViewRef.current)
  ScrollViewRef.current.scrollTo({y:height, animated:true});
}
const HomePage4=(height)=>{
  if(ScrollViewRef.current)
  ScrollViewRef.current.scrollTo({y:height, animated:true});
}
    const submit=()=>{
        setButton(true)
        setButton2(false)
        setButton3(false)
        setButton4(false)
    }
    const submit2=()=>{
      setButton(false)
      setButton2(true)
      setButton3(false)
      setButton4(false)
  }
  const submit3=()=>{
    setButton(false)
    setButton2(false)
    setButton3(true)
    setButton4(false)
}
const submit4=()=>{
  setButton(false)
  setButton2(false)
  setButton3(false)
  setButton4(true)
}
     
    // const productName=[
    //     {
    //         id:1,
    //         product:'wash dry & fold'
    //     },
    //     {
    //         id:2,
    //         product:'press & ironing'
    //     },
    //     {
    //         id:3,
    //         product:'dry clean'
    //     },
    //     {
    //         id:4,
    //         product:'Household items'
    //     },
    //   ]
    const Wash=[
       {
        id:1,
        image:require('./Image/Group2050.png'),
        product:"wash dry & fold",
        size1:"size   - ",
        size:"1 Bag",
        price1:"price - ",
        price:"rm 19",
        text:"Every subsequeirt - rm 06"
       },
       {
        id:2,
        image:require('./Image/Group2051.png'),
        product:"dry & fold",
        size1:"size   - ",
        size:" 1 Bag",
        price1:"price - ",
        price:"rm 19",
        text:"Every subsequeirt - rm 06"
        },
        ]
        const shart =[
        {
        id:1,
        image:require('./Image/carpet.png'),
        product:"shart/T-shart/pants/blouse",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:2,
        image:require('./Image/Group2057.png'),
        product:"skirt/baju melayu/blazzer",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:3,
        image:require('./Image/dress-6.png'),
        product:"dress/baju kurung",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:4,
        image:require('./Image/Group2060.png'),
        product:"badsheet/Quilt cover-single",
        size1:"size   - ",
        size:"single",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:5,
        image:require('./Image/Group2061.png'),
        product:"badsheet/Quilt cover-double/queen / king",
        size1:"size   - ",
        size:"double / qoueen / king",
        price1:"price - ",
        price:"rm 19",
        },
        ]
   const clean=[ {
        id:1,
        image:require('./Image/Group2062.png'),
        product:"shart/T-shart/pants/blouse",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:2,
        image:require('./Image/Group2057.png'),
        product:"skirt/baju melayu/blazzer",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:3,
        image:require('./Image/blazer-cloth.png'),
        product:"Coat / Blazzer / Suit (per piece) / Jepah",
        size1:"size   - ",
        size:"per price",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:4,
        image:require('./Image/dress-6.png'),
        product:"dress/baju kurung",
        size1:"size   - ",
        size:"single",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:5,
        image:require('./Image/tie.png'),
        product:"neck tie / bow tie / handkerchief / gloves / cap / socks",
        size1:"size   - ",
        size:"per set / pair",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:6,
        image:require('./Image/Group2060.png'),
        product:"badsheet / Quilt cover-single",
        size1:"size   - ",
        size:"single",
        price1:"price - ",
        price:"rm 19",
        },
        {
        id:7,
        image:require('./Image/Group2061.png'),
        product:"badsheet / Quilt cover-double / queen / King",
        size1:"size   - ",
        size:"double / qoueen / king",
        price1:"price - ",
        price:"rm 19",
        },
    ]

    const Hello=[
       {
        id:1,
        image:require('./Image/carpet.png'),
        text:'Carpet',
        size1:"size   - ",
        size:"S<10sqft ",
        price1:"price - ",
        price:" Rm 30",

        size2:"size   - ",
        sizem:"M<10sqft",
        price2:"price - ",
        pricem:"Rm 50",

        size3:"size   - ",
        sizer:"L<10sqft ",
        price3:"price - ",
        pricer:"Rm 60",

        size4:"size   - ",
        sizex:"XL<10sqft",
        price4:"price - ",
        pricex:"Rm 100",

        size5:"size   - ",
        sizerm:"S<10sqft ",
        price5:"price - ",
        pricerm:"Rm 30",

        size6:"size   - ",
        sizeo:"Other        ",
        price6:"price - ",
        priceo:"Rm 30", 
       },
       {
        id:2,
        image:require('./Image/curtain-and.png'),
        text:'Curtain (machine wash)',
        size1:"size   - ",
        size:"S<50sqft   ",
        price1:"price - ",
        price:" Rm 30",

        size2:"size   - ",
        sizem:"M<100sqft",
        price2:"price - ",
        pricem:"Rm 50",
 
        size3:"size   - ",
        sizer:"L<150sqft ",
        price3:"price - ",
        pricer:"Rm 60",

        size4:"size   - ",
        sizex:"XL<200sqft",
        price4:"price - ",
        pricex:"Rm 100",

        size5:"size   - ",
        sizerm:"S<10sqft   ",
        price5:"price - ",
        pricerm:"Rm 30",

        size6:"size   - ",
        sizeo:" Other      ",
        price6:"   price - ",
        priceo:"Rm 30", 
       },
      ]
    

  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
    <ScrollView showsVerticalScrollIndicator={false} ref={ScrollViewRef}>
   <View style={{flexDirection:'row',marginTop:14,marginLeft:17}}>
    <TouchableOpacity onPress={ ()=>navigation.navigate('Services')}>
      <Image source={require('./Image/NextButton.png')} />
    </TouchableOpacity>
    <Text style={styles.Order_Detail}>PriceList</Text>
   </View>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>   
     <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={[styles.productTouch,{backgroundColor:button?'rgb(5, 11, 127)':'white'}]}
       onPress={submit} onPressIn={()=>HomePage4(0)}>
        <Text style={[styles.product,{color:button?'white':'black'}]}>wash dry & fold</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.productTouch,{backgroundColor:button2?'rgb(5, 11, 127)':'white'}]}
      onPress={submit2} onPressIn={()=>HomePage(600)}>
        <Text style={[styles.product,{color:button2?'white':'black'}]}>press & ironing</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.productTouch,{backgroundColor:button3?'rgb(5, 11, 127)':'white'}]}
      onPress={submit3} onPressIn={()=>HomePage(1500)}>
        <Text style={[styles.product,{color:button3?'white':'black'}]}>dry clean</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.productTouch,{backgroundColor:button4?'rgb(5, 11, 127)':'white'}]}
      onPress={submit4} onPressIn={()=>HomePage(2700)}>
        <Text style={[styles.product,{color:button4?'white':'black'}]}>Household items</Text>
      </TouchableOpacity>
     </View>
   </ScrollView>
   

   {/* <FlatList  data={productName}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
      return(
        <View>
          <TouchableOpacity onPress={submit}
      style={[styles.productTouch,{backgroundColor:button4?'blue':'white'}]}
      >
        <Text style={[styles.product,{color:button4?'white':'black'}]}>{item.product}</Text>
      </TouchableOpacity>
        </View>
      )
    }
  }
   /> */}
   
   <Text style={styles.heading}> wash dry & fold</Text>
     <FlatList 
      data={Wash}
      keyExtractor={(item)=>item.id}
      renderItem={ ({item})=>{
        return(
            <View style={styles.itemView}>
                <View style={styles.itemImage}>
                <Image source={item.image} />
                <Text style={styles.itemProduct}>{item.product}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size1}</Text>
                <Text style={styles.itemsize}>{item.size}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.price1}</Text>
                <Text style={styles.itemprice}>{item.price}</Text>
                </View>
                <Text style={styles.itemtext}>{item.text}</Text>
            </View>
        )
      }}
     />
     <Text style={styles.heading}> dress & ironing</Text>
     <FlatList 
      data={shart}
      keyExtractor={(item)=>item.id}
      renderItem={ ({item})=>{
        return(
            <View style={styles.itemView}>
                <View style={styles.itemImage}>
                <Image source={item.image} />
                <Text style={styles.itemProduct1}>{item.product}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size1}</Text>
                <Text style={styles.itemsize}>{item.size}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.price1}</Text>
                <Text style={styles.itemprice}>{item.price}</Text>
                </View> 
                </View>
        )
      }}
     />
     <Text style={styles.heading}> dry & clean</Text>
     <FlatList 
      data={clean}
      keyExtractor={(item)=>item.id}
      renderItem={ ({item})=>{
        return(
            <View style={styles.itemView}>
                <View style={styles.itemImage}>
                <Image source={item.image} />
                <Text style={styles.itemProduct1}>{item.product}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size1}</Text>
                <Text style={styles.itemsize}>{item.size}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.price1}</Text>
                <Text style={styles.itemprice}>{item.price}</Text>
                </View> 
                 </View>
        )
      }}
     />
      <Text style={styles.heading}> Household items </Text>
     <FlatList 
      data={Hello}
      keyExtractor={(item)=>item.id}
      renderItem={ ({item})=>{
        return(
          <TouchableWithoutFeedback
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)} >
            <View style={[styles.itemView,isPressed&&styles.itemViewPressed]}> 
           
                <View style={styles.itemImage}>
                <Image source={item.image} />
                <Text style={styles.itemProduct1}>{item.text}</Text>
                </View>
                <View style={styles.itemsizeView}>
                <Text style={styles.itemsize1}>{item.size1}</Text>
                <Text style={styles.itemsize}>{item.size}</Text>
                <Text style={styles.itemsize2}>{item.price1}</Text>
                <Text style={styles.itemprice}>{item.price}</Text>
                </View>
                

                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size2}</Text>
                <Text style={styles.itemsize}>{item.sizem}</Text>
                <Text style={styles.itemsize2}>{item.price2}</Text>
                <Text style={styles.itemprice}>{item.pricem}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size3}</Text>
                <Text style={styles.itemsize}>{item.sizer}</Text>
                <Text style={styles.itemsize2}>{item.price3}</Text>
                <Text style={styles.itemprice}>{item.pricer}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size4}</Text>
                <Text style={styles.itemsize}>{item.sizex}</Text>
                <Text style={styles.itemsize2}>{item.price4}</Text>
                <Text style={styles.itemprice}>{item.pricex}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size5}</Text>
                <Text style={styles.itemsize}>{item.sizerm}</Text>
                <Text style={styles.itemsize2}>{item.price5}</Text>
                <Text style={styles.itemprice}>{item.pricerm}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.itemsize1}>{item.size6}</Text>
                <Text style={styles.itemsize}>{item.sizeo}</Text>
                <Text style={styles.itemsize2}>{item.price6}</Text>
                <Text style={styles.itemprice}>{item.priceo}</Text>
                </View> 
                 </View>
               </TouchableWithoutFeedback >
        )
      }}
     />
     </ScrollView>
    </View>
  )
    }
  

const styles = StyleSheet.create({
    Order_Detail:{
        fontSize:21,
        color:'black',
        marginLeft:80,
        marginTop:4,
        textTransform:'capitalize',
        fontWeight:'500'
        },
        productTouch:{
            borderRadius:7,
            marginTop:17,
            marginLeft:20,
            padding:6,
            paddingHorizontal:12,
            borderWidth:.4,

        },
        product:{
           fontSize:16,
           textTransform:'capitalize',
        },
        heading:{
            fontSize:18,
            marginLeft:20,
            marginTop:18,
            color:'black',
            textTransform:'capitalize'
        },
        itemView:{
          borderWidth:.4,
          padding:20,
          marginHorizontal:20,
          marginTop:17,
          borderRadius:12,
          marginBottom:15
        },
        itemViewPressed:{
          borderColor:'blue',
          borderWidth:1,
      },
        itemImage:{
            flexDirection:'row',
        },
        itemProduct:{
            fontSize:16,
            color:'black',
            textTransform:'capitalize',
            marginTop:12,
            marginLeft:10
        },
        itemProduct1:{
            fontSize:16,
            color:'black',
            textTransform:'capitalize',
            marginLeft:10
        },
        itemsizeView:{
          flexDirection:'row'
        },
        
        itemtext:{
          fontSize:15,
          color:'rgb(116, 210, 224)',
          marginLeft:10,
          marginTop:13
      },
        itemprice:{
            fontSize:15,
            color:'rgb(5, 11, 127)',
            textTransform:'uppercase',
            marginLeft:2,
            marginTop:13,
            fontWeight:'500'
        },
        itemsize1:{
            fontSize:15,
            color:'black',
            textTransform:'capitalize',
            marginLeft:10,
            marginTop:13
        },
        itemsize:{
            fontSize:15,
            color:'rgb(5, 11, 127)',
            textTransform:'capitalize',
            marginTop:13,
            fontWeight:'500'
        },
        itemsize2: {
          fontsize: 15,
          color: 'black',
          textTransform: 'capitalize',
          marginLeft: 50,
          marginTop: 13
        }
})

export default PriceList
8