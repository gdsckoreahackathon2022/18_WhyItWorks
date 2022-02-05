import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class HomeScreen extends React.Component {
  render() {
      return <WebView source={{ uri: 'https://flamboyant-fermat-6d73c1.netlify.app/'}} style={{ marginTop: 10 }} />;
  }
}