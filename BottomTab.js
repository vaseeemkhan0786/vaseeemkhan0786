import { View, Text ,Image} from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from './Account';
import Activity from './Activity';
import Services from './Services';
import ResisterUserDashboard from './ResisterUserDashboard';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import Service from './Services';

const Tab=createBottomTabNavigator();
const BottomTab = () => {
  const[home,setHome]=useState(false);
  const[activity,setActivity]=useState(false);
  const[wash,setWash]=useState(false);
  const[account,setAccount]=useState(false);
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Services') {
          iconName = 'signing';
        }
        else if (route.name === 'Activity') {
          iconName = 'circle-o';
        }
        else if (route.name === 'Account') {
          iconName = 'user-circle-o';
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue', // Change the active tab color
      inactiveTintColor: 'gray', // Change the inactive tab color
      }}>
        <Tab.Screen name='Home' component={ResisterUserDashboard} options={{headerShown:false }}/> 
        <Tab.Screen name='Services' component={Services} options={{headerShown:false}}/> 
        <Tab.Screen name='Activity' component={Activity} options={{headerShown:false}  }/>
        <Tab.Screen name='Account' component={Account} options={{headerShown:false}  }/>
    </Tab.Navigator>
  )
}

export default BottomTab;