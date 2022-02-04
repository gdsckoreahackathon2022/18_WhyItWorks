import { View, StyleSheet, Text, ScrollView, Dimensions, Image } from 'react-native';
import * as React from 'react';
import { BlurView } from 'expo-blur';

// import GestureRecognizer from 'react-native-swipe-gestures';

import {fbaseFirestore} from '../firebaseSettings'
import {fbaseStorage} from '../firebaseSettings'

background_image = 'https://reactnative.dev/img/tiny_logo.png'

export default function ViewImage() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={ styles.image }
        source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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