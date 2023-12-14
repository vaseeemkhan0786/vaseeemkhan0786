import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
        <Image style={styles.frame} source={require('./Image/Frame.png')} />
        <Image style={styles.frame1} source={require('./Image/Group2.png')} />
      <View style={styles.frame1View}>
      <Image style={styles.frameImage} source={require('./Image/Frame1.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    frame:{
        marginTop:100,
        marginLeft:120,
    },
    // frame1View:{
    //   marginHorizontal:15,
    //   marginTop:15,
    //   borderWidth:2,
    //   borderColor:'black',
      
    // },
    frame1:{
       
        marginTop:10,
        marginLeft:130
    },
    frameImage:{
        marginTop:10,
    }
})

export default SplashScreen

