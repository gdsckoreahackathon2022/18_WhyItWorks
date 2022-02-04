import { View, StyleSheet, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';


import {fbaseFirestore} from '../firebaseSettings'
import {fbaseStorage} from '../firebaseSettings'

background_image = 'https://reactnative.dev/img/tiny_logo.png'

export default function ViewImage({route}) {
  const { img } = route.params;
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
      <Image
        style={ styles.image }
        source={{
        uri: img,
        }}
      />
      {/* </TouchableOpacity> */}
    </View>
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