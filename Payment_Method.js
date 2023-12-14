import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import  Modal  from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';

const Payment_Method = ({navigation}) => {
    const[checked,setChecked]=useState(false);
    const[checked2,setChecked2]=useState(false);
    const[checked3,setChecked3]=useState(false);
    const[checked4,setChecked4]=useState(false);
    const[checked5,setChecked5]=useState(false);
    const[visible,setVisible]=useState(false);
    const [buttonHeight, setButtonHeight] = useState(50); // Initial height for button
    const [bankSelectorHeight, setBankSelectorHeight] = useState(50); // Initial height for bank name selector
    const [selectedBank, setSelectedBank] = useState(''); // State to store the selected bank
  
    const handleButtonClick = () => {
      // Change the button height on click
      setButtonHeight(buttonHeight + 10);
    };
  
    const handleBankSelectorChange = (bank) => {
      // Change the bank selector height and update the selected bank
      setBankSelectorHeight(bankSelectorHeight + 10);
      setSelectedBank(bank);
    };
  
    const Height =()=> {
        setButtonHeight(buttonHeight+100)
    }
     useEffect( ()=>{
           setVisible(true);
     })
    const submit=()=>{
        setChecked(true)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
       } 
    const submit2=()=>{
        setChecked(false)
        setChecked2(true)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
    }
    const submit3=()=>{
        setChecked(false)
        setChecked2(false)
        setChecked3(true)
        setChecked4(false)
        setChecked5(false)
    }
    const submit4=()=>{
        setChecked(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(true)
        setChecked5(false)
    }
    const submit5=()=>{
        setChecked(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(true)
    }
    const items =[
        {
            id:1,
            name:'My Credit',
        },
        {
            id:2,
            name:'Creadit Card',
        },
        {
            id:3,
            name:'eWallet',
        },
        {
            id:4,
            name:'Online Banking',
        },
    ]
  return (
    <View style={{backgroundColor:'rgb(255,255,255)'}}>
       <ScrollView showsVerticalScrollIndicator={true}>
     <View style={{flexDirection:'row',marginTop:14,marginLeft:12}}>
     <TouchableOpacity onPress={()=>navigation.navigate('DeliveryAddress')}>
    <Image style={{borderRadius:21,width:41,height:41}} source={require('./Image/NextButton.png')} />
     </TouchableOpacity>
    <Text style={styles.Payment}>
       payment method
     </Text>
    </View>
   <View style={styles.SubTotalView}>
   <View style={styles.totalView}>
     <Text style={styles.total}>sub total</Text>
     <Text style={styles.totalRm}>RM 169</Text>
     </View>
    <View style={styles.totalView}>
     <Text style={styles.total}>tex</Text>
    <Text style={styles.totalRm}>RM 05</Text>
     </View>
    <View style={styles.totalView}>
     <Text style={styles.total}>Transportation fee</Text>
     <Text style={styles.totalRm}>RM 10</Text>
    </View>
</View>
    <Text style={styles.select}>Select payment method </Text>
    {/* <Modal isVisible={visible}>
        <View style={styles.ModalVisaView}>
        <View style={styles.RowView}>
              <View style={styles.Visa}>
              <Text style={styles.VISA}>VISA</Text>
              </View>
             <View >
             <Text style={styles.VISAHSBS}>HSBS BANK</Text>
              <Text>xxxx xxxx xxxx 1502</Text>           
             </View>
             </View>
             <View style={styles.visaView}>
             <Image source={require('./Image/Group1903.png')}/> 
            </View>   
            <View style={styles.visaView}>
             <Text style={styles.AddNew}>Add new card</Text>
            </View>
            </View>
     </Modal>  */}

         <View style={styles.backWard}>
                 {
                    checked5?
                    <View style={styles.availaView}>  
                    <View style={styles.availableView}>                 
                     <Text style={styles.available}>Available Balance RM 120.00</Text>
                     <TouchableOpacity onPressIn={submit5}  onPress={Height}>
                              <View style={styles.radioBotton}>
                                 {
                                  checked5?<View style={styles.radio}><Text></Text></View>:null
                                 }
                              </View>
                             
                          </TouchableOpacity> 
                          </View> 
                          <View style={styles.backVisa}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Top_up')}>
                          <Text style={styles.backs}>Top Up</Text>  
                          </TouchableOpacity>                   
                          </View>  
                          </View>  
                          :  <View style={styles.visa}>
                          <Text style={styles.back}>My Creadit</Text>
                          <TouchableOpacity onPressIn={submit5} >
                              <View style={styles.radioBotton}>
                                 {
                                  checked5?<View style={styles.radio}><Text></Text></View>:null
                                 }
                              </View>
                          </TouchableOpacity>
                      </View>
                      
                }
        {/* <Picker
        selectedValue={selectedBank}
        style={{ height: bankSelectorHeight, width: 200 }}
        onValueChange={(itemValue) => handleBankSelectorChange(itemValue)}
        >
        <Picker.Item label="Select a bank" value="" />
        <Picker.Item label="Bank 1" value="Bank 1" />
        <Picker.Item label="Bank 2" value="Bank 2" />
      </Picker> */}
            
                    {
                        checked2? <View  style={styles.availaView} >
                            <View style={styles.availableView}>
                        <Text style={styles.creditCard}> Credit Card </Text>
                        <TouchableOpacity onPressIn={submit2}>
                            <View style={styles.radioBotton}>
                               {
                                checked2?<View style={styles.radio}><Text></Text></View>:null
                               }
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.RowView}>
                              <View style={styles.Visa}>
                              <Text style={styles.VISA}>VISA</Text>
                              </View>
                             <View style={{marginLeft:12}}>
                             <Text style={styles.VISAHSBS}>HSBS BANK</Text>
                              <Text>xxxx xxxx xxxx 1502</Text>           
                             </View>
                             </View>
                             <View style={styles.visaView}>
                             <Image source={require('./Image/Group1903.png')}/> 
                            </View>   
                            <TouchableOpacity onPress={()=>navigation.navigate('AddCard')}>
                            <View style={styles.visaView}>
                             <Text style={styles.AddNew}>Add new card</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                            :<View  style={styles.visa} >
                            <Text style={styles.back}> Credit Card </Text>
                            <TouchableOpacity onPressIn={submit2}>
                                <View style={styles.radioBotton}>
                                   {
                                    checked2?<View style={styles.radio}><Text></Text></View>:null
                                   }
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    <View  style={styles.visa} >
                        <Text style={styles.back}> eWallet </Text>
                        <TouchableOpacity onPressIn={submit3}>
                            <View style={styles.radioBotton}>
                               {
                                checked3?<View style={styles.radio}><Text></Text></View>:null
                               }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.visa} >
                        <Text style={styles.back}> Online Banking </Text>
                        <TouchableOpacity onPressIn={submit4}>
                            <View style={styles.radioBotton}>
                               {
                                checked4?<View style={styles.radio}><Text></Text></View>:null
                               }
                            </View>
                        </TouchableOpacity>
                    </View>
            {/* </View>        */}
            <View style={styles.visaapply}>
            <Text style={styles.applycoupon}>apply coupon</Text>
            <TouchableOpacity style={styles.useTouch}
            onPress={()=>navigation.navigate('Vouchers')}>
            <Text style={styles.useVoucher}>use voucher </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.TotalpayView}>
            <View>
            <Text style={styles.TotalPay}>total pay</Text>
            <Text style={styles.RM}>RM 184</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'rgb(5, 11, 127)',borderRadius:14,padding:11,paddingHorizontal:35}}
            onPress={()=>navigation.navigate('Payment_Success')}>
                <Text style={styles.order}>order now</Text>
            </TouchableOpacity>
            </View>
            </View>
     </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    backWard:{
       backgroundColor: 'rgb(247, 252, 252)'
    },
    totalView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        
    },
    SubTotalView:{borderWidth:1,
        marginHorizontal:20,
        backgroundColor:'rgb(255,255,255)',
        marginTop:20,
        borderRadius:12,
        borderColor:'blue',
        padding:15,
        paddingBottom:28
        
    },
    Payment:{
        fontSize:21,
        color:'black',
        fontWeight:'400',
        marginLeft:65,
        marginTop:4,
        textTransform:'capitalize',
},
    total:{
        fontSize:18,
        color:'rgb(5, 11, 127)',
        fontWeight:'400',
        marginRight:20,
        marginTop:13,
        textTransform:'capitalize'
    },
    totalRm:{
        fontSize:17,
        color:'rgb(5, 11, 127)',
        fontWeight:'400',
        marginTop:13,
        marginRight:20,
        textTransform:'uppercase', 
    },
    select:{
        fontSize:20,
        color:'black',
        marginLeft:20,
        fontWeight:'400',
        textTransform:'capitalize',
        marginTop:15
    },
    credit:{
        borderRadius:10,
        marginTop:15,
        borderWidth:0.3,
        borderColor:'blue',
        padding:20,
        marginHorizontal:20
    },
    visa:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10,
        borderWidth:.5,
        borderColor:'rgb(145, 244, 255)',
        marginTop:25,
        backgroundColor:'rgb(255,255,255)',
        paddingVertical:16,
        paddingRight:14,
        marginHorizontal:20,    
    },
    visaapply:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10,
        marginTop:25,
        backgroundColor:'rgb(255,255,255)',
        padding:20,
        marginHorizontal:20,
        
    },
    visaView:{
        borderRadius:10,
        marginTop:15,
        borderWidth:0.5,
        borderColor:'rgb(5, 11, 127)',
        padding:8,
       marginHorizontal:20
    },
    ModalVisaView:{
        borderRadius:10,
        marginTop:15,
        borderWidth:0.3,
        borderColor:'rgb(5, 11, 127)',
        padding:20,
        marginHorizontal:20,
        backgroundColor:'rgb(255,255,255)'
    },
    RowView:{
        flexDirection:'row',
        borderRadius:10,
        marginTop:15,
        borderWidth:0.3,
        borderColor:'rgb(5, 11, 127)',
        padding:8,
        backgroundColor:'rgb(255,255,255)',
        marginHorizontal:20
    },
    Visa:{
      backgroundColor:'rgb(232, 251, 252)',
      borderRadius:8,
      fontWeight:'500',
      color:'black',
      paddingHorizontal:5,
    },
    VISA:{
       marginTop:8
    },
    available:{
        fontSize:16,
        fontWeight:'500',
        color:'rgb(5, 11, 127)'
    },
    availableView:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginHorizontal:20,
       marginTop:15
    },
    availaView:{
        marginTop:20,
        borderColor:'rgb(145, 244, 255)',
        borderWidth:0.5,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'rgb(255,255,255)',
        paddingBottom:20,
    },
    creditCard:{
        fontSize:17,
        fontWeight:'500',
        color:'black',
    },
    VISAHSBS:{
      fontSize:14,

    },
    back:{
        fontSize:17,
        fontWeight:'500',
        color:'black',
        marginHorizontal:20,
    },
    backs:{
        fontSize:18,
        fontWeight:'500',
        color:'black',
        textAlign:'center',
        marginHorizontal:20,
    },
    backVisa:{
        borderRadius:7,
        marginTop:15,
        borderWidth:0.5,
        borderColor:'rgb(5, 11, 127)',
        padding:10,
        marginHorizontal:20
    },
    AddNew:{
        fontSize:20,
        fontWeight:'500',
        textTransform:'capitalize',
        color:'rgb(5, 11, 127)',
        textAlign:'center'
    },
    radioBotton:{
        width:20,
        height:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgb(5, 11, 127)'
    },
    radio:{
        width:18,
        height:18,
        borderWidth:5,
        borderRadius:10,
        borderColor:'rgb(5, 11, 127)'
    },
    applycoupon:{
        fontSize:16,
        textTransform:'capitalize',
        color:'rgb(5, 11, 127)',
        marginTop:8,
        fontWeight:'500'
    },
    useTouch:{
        fontSize:16,
        textTransform:'capitalize',
        borderRadius:8,
        borderWidth:1,
        borderColor:'rgb(5, 11, 127)',
        padding:7,
        paddingHorizontal:10,
    },
    useVoucher:{
        fontSize:16,
        color:'rgb(5, 11, 127)',
        textTransform:'capitalize',
        fontWeight:'600'
    },
    TotalpayView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:25,
        backgroundColor:'rgb(255,255,255)',
        borderRadius:12,
        padding:15,
        marginTop:17,
        marginHorizontal:20,
        borderColor:'rgb(255,255,255)',
        borderWidth:1,
        marginTop:20,
        
    },
    TotalPay:{
        fontSize:20,
        textTransform:'capitalize',
        justifyContent:'center',
        fontWeight:'400',
        color:'rgb(5, 11, 127)'
    },
    RM:{
        fontSize:24,
        color:'rgb(5, 11, 127)',
        fontWeight:'500',
    },
    order:{
        fontSize:20,
        textTransform:'capitalize',
        fontWeight:'500',
        textAlign:'center',
        color:'white',
        marginTop:3  
        },
    Hello:{
        backgroundColor:'rgb(5, 11, 127)',
        borderRadius:14,
        padding:15,
        width:180
        }
})

export default Payment_Method
