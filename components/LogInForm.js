import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { fbaseAuth } from '../firebaseSettings';

const SignUpForm = () => {
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
      console.log('in try');
      await signInWithEmailAndPassword(fbaseAuth, email, password);
      console.log('login success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <TextInput onChange={onEmailChange} placeholder='이메일' style={styles.input} />
      <TextInput 
        onChange={onPWChange} 
        placeholder='비밀번호' 
        secureTextEntry={true}
        style={styles.input} 
      />
      <Button 
        type='button'
        title='로그인' 
        onPress={onSubmit} 
        style={styles.submitButton}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#308cff',
  },
  input: {
    height: 40,
    fontSize: 14,
  },
  submitButton: {
    flex: 1,
    color: '#308cff',
  }
});

export default SignUpForm;
