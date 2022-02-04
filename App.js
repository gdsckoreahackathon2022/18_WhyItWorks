import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler, Linking, ActivityIndicator, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
      return <WebView source={{ uri: 'https://flamboyant-fermat-6d73c1.netlify.app/'}} style={{ marginTop: 10 }} />;
  }
}