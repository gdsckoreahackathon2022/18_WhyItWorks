import { StyleSheet, View } from 'react-native';
import SignInOrUp from './components/SignInOrUp'

export default function App() {
  return (
    <View style={styles.container}>
      <SignInOrUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
