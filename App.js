import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// Icons
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// Colors 
import * as Colors from './src/constants/Colors';

// Screens
import HomeScreen from './src/screens/home/HomeScreen';
import HomeDetailScreen from './src/screens/home/HomeDetailScreen';

import UserScreen from './src/screens/user/UserScreen.js';


// Stack Navigation
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
    </HomeStack.Navigator>
  );
}

const UserStack = createStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
    </UserStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Colors.WHILE}
        inactiveColor={Colors.WHILE}
        barStyle={{ backgroundColor: Colors.MAIN }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size + 20}
                  color={color}
                />
              );
            }
            else if (route.name === 'User') {
              return (
                <FontAwesome
                  name={
                    focused
                      ? 'user'
                      : 'user-o'
                  }
                  size={size + 20}
                  color={color}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
