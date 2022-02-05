import { Button, StyleSheet, View } from 'react-native';

const SignInOrUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whitespace} />

      <View style={styles.buttonWrapper}>
        <Button title='가입하기' style={styles.button} color='#ffffff' />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title='로그인' style={styles.button} color='#ffffff' />
      </View>

      <View style={styles.whitespace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    maxHeight: 60,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#308cff',
    color: '#ffffff',
  },
  button: {
    fontSize: 20,
    justifyContent: 'flex-end',
  },
  whitespace: {
    flex: 1,
  },
});

export default SignInOrUp;
