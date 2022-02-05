import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import { fbaseAuth } from '../firebaseSettings';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (text) => {
    setEmail(text);
  };

  const onPWChange = (text) => {
    setPassword(text);
  };

  const onSubmit = async () => {
    try {
      await signInWithEmailAndPassword(fbaseAuth, email, password);
      console.log('login success');
    } catch (error) {
      Alert.alert('로그인 오류', '올바르지 않은 이메일 또는 비밀번호');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.whitespace} />
      <View style={styles.inputWrapper}>
        <TextInput 
          onChangeText={onEmailChange} 
          placeholder='이메일'
          style={styles.input} 
        />
      </View>
      
      <View style={styles.inputWrapper}>
        <TextInput 
          onChangeText={onPWChange} 
          placeholder='비밀번호' 
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      
      <View style={styles.buttonWrapper}>
        <Button 
          title='로그인' 
          onPress={onSubmit} 
          style={styles.submitButton}
          color='#ffffff'
        />
      </View>
    
      <View style={styles.whitespace} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    flex: 1,
    maxHeight: 60,
    marginVertical: 10,
    padding: 10,
    fontSize: 14,
    borderColor: '#308cff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  input: {
    fontSize: 20,
    justifyContent: 'center',
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
  submitButton: {
    color: '#ffffff',
    fontSize: 20,
  },
  whitespace: {
    flex: 1,
  },
});

export default SignInForm;
