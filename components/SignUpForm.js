import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { fbaseAuth } from '../firebaseSettings';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onEmailChange = (text) => {
    setEmail(text);
  };

  const onPWChange = (text) => {
    setPassword(text);
  };

  const onPWConfirmChange = (text) => {
    setPasswordConfirm(text);
  }

  const onSubmit = async () => {
    if (password === passwordConfirm) {
      try {
        console.log('in try');
        await createUserWithEmailAndPassword(fbaseAuth, email, password);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('', '비밀번호가 일치하지 않습니다');
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
      <TextInput 
        onChange={onPWConfirmChange} 
        placeholder='비밀번호 확인' 
        secureTextEntry={true}
        style={styles.input} 
      />
      <Button 
        type='button'
        title='가입하기' 
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
