import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import ViewImage from './components/1'
import DataFetch from './components/dataFetch';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Tab } from 'react-native-elements/dist/tab/Tab';
import HomeScreen from './components/HomeScreen'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import MyPage from './components/MyPage'
import SignInOrUp from './components/SignInOrUp'
import CameraTab from './components/CameraTab'
const MapStack =createStackNavigator();
const UserStack =createStackNavigator();
const Tab =createBottomTabNavigator();

function MapScreen() {
  return(
      <MapStack.Navigator initialRouteName='home'>
        <MapStack.Screen name='home' component={HomeScreen}/>
        <MapStack.Screen name='all_photo_1' component={DataFetch}/>
        <MapStack.Screen name='detail' component={ViewImage}/>        
      </MapStack.Navigator>
  )
}

function UserScreen() {
  return(
    <UserStack.Navigator initialRouteName='signin'>
        <UserStack.Screen name='signin' component={SignInForm}/>
        <UserStack.Screen name='signup' component={SignUpForm}/>
        <UserStack.Screen name='signinorup' component={SignInOrUp}/>
        <UserStack.Screen name='mypage' component={MyPage}/>        
      </UserStack.Navigator>
  )
}

function Ranking() {
  return(
      <MapStack.Navigator initialRouteName='all_photo'>
        <MapStack.Screen name='all_photo' component={DataFetch}/>
        <MapStack.Screen name='detail' component={ViewImage}/>        
      </MapStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Map' component={MapScreen}/>
        <Tab.Screen name='User' component={UserScreen}/>
        <Tab.Screen name='Camera' component={CameraTab}/>
        <Tab.Screen name='photo' component={Ranking}/>
      </Tab.Navigator>
    </NavigationContainer>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
  },
  image:{
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image_1:{
    width: '100%',
    height: '100%' 
  },
  blurContainer:{
    flex: 1,
    padding: 0,
    justifyContent: 'center',
  }
});
