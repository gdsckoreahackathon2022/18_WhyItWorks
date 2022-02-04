import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import { BlurView } from 'expo-blur';

// import GestureRecognizer from 'react-native-swipe-gestures';

import {fbaseFirestore} from '../firebaseSettings'
import {fbaseStorage} from '../firebaseSettings'

background_image = 'https://reactnative.dev/img/tiny_logo.png'

// render() {
//   <GestureRecognizer
//           onSwipeLeft={this._onSwipeLeft}
//           onSwipeRight={this._onSwipeRight}
//           config={{
//             velocityThreshold: 0.3,
//             directionalOffsetThreshold: 80,
//           }}
//           style={{
//             flex: 1,
//           }}>
//           ...
//   </GestureRecognizer>
// }

// private _onSwipeLeft = gestureState => {

//   this.setState({
//   });
// };

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <Image style={[StyleSheet.absoluteFill, styles.image_1]} source={{ uri: background_image}}/>
      <BlurView intensity={100} style={styles.blurContainer}>
      <Image
        style={ styles.image }
        source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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