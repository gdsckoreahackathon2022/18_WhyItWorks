import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import { BlurView } from 'expo-blur';
import ViewImage from './components/1'
import DataFetch from './components/dataFetch';

export default function App() {
  return (
    <View style={styles.container}>
      <DataFetch/>
    </View>
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