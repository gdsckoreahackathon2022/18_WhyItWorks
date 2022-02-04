import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';

export default function App() {
  return (
    <View style={styles.container}>
      <LogInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
