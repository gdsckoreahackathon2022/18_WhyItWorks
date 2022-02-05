import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import ViewImage from './components/1'
import DataFetch from './components/dataFetch';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tab';
import { Tab } from 'react-native-elements/dist/tab/Tab';
const MapStack =createStackNavigator();
const UserStack =createStackNavigator();
const Tab =createBottomTabNavigator();

function MapScreen() {
  return(
      <MapStack.Navigator initialRouteName='home'>
        <MapStack.Screen name='home' component={/*추후 추가(지도)*/}/>
        <MapStack.Screen name='all_photo' component={DataFetch}/>
        <MapStack.Screen name='detail' component={ViewImage}/>        
      </MapStack.Navigator>
  )
}

function UserScreen() {
  return(
    <UserStack.Navigator initialRouteName='signin'>
        <UserStack.Screen name='signin' component={SignInForm}/>
        <UserStack.Screen name='signup' component={SignUpForm}/>
        <UserStack.Screen name='mypage' component={MyPage}/>        
      </UserStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Map' component={MapScreen}/>
        <Tab.Screen name='User' component={UserScreen}/>
        <Tab.Screen name='Camera' component={CameraScreen}/>
        <Tab.Screen name='Ranking' component={RankingScreen}/>
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
