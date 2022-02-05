import React from 'react';
import { render } from 'react-dom';
import { TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet, Image, Text, View, Alert, Button } from 'react-native';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import * as MediaLibrary from "expo-media-library";


export default class CameraTab extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.front,
    };

    this.cameraRef = React.createRef();
  }

  render() {
    const { hasPermission, cameraType } = this.state;

    if (hasPermission === true) {
      return (

        <View style={styles.container}>
          <Camera
            ref={this.cameraRef}
            style={{
              width: width - 40,
              height: height / 1.5,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.takePhoto}
          >
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else if (hasPermission === false) {
        return <Text>Don't have Permission for this App.</Text>;
    } 
    else {
        return <ActivityIndicator />;
    }
  }
  
  state = {
    hasPermission: null,
  }

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
  
    if (status === 'granted') {
      this.setState({ hasPermission: true })
    } else {
      this.setState({ hasPermission: false })
    }
  }

  takePhoto = async () => {
    try {
      
      if (this.cameraRef.current) {
        let { uri, base64 } = await this.cameraRef.current.takePictureAsync({
          quality: 1,
          base64: true,
        })
        
        if (uri) {

          await this.savePhoto(uri)

        }
      }
    } catch (error) {
      //alert(error)
      Alert.alert(error);
    }
  }

  savePhoto = async uri => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  
      if (status === 'granted') {
        const asset = await MediaLibrary.createAssetAsync(uri)
        let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME)

        if (album === null) {
          album = await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset)
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album.id)
        }
      } else {
        this.setState({ hasPermission: false })
      }
    } catch (error) {
      Alert.alert(error)
    }
  }
}

const { width, height } = Dimensions.get("window");

const ALBUM_NAME = "Smiley Cam";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15
  }
});