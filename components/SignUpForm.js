import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
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
        await createUserWithEmailAndPassword(fbaseAuth, email, password);
        console.log('SignUp success');
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('잘못된 이메일 주소', '이메일 주소를 확인하세요');
            break;
          case 'auth/email-already-in-use':
            Alert.alert('가입된 이메일', '이미 가입된 이메일입니다');
            break;
          case 'auth/weak-password':
            Alert.alert('안전하지 않은 비밀번호', '비밀번호는 6글자 이상이어야 합니다');
            break;
          default:
            Alert.alert('회원가입 오류');
        }
      } 
    } else {
      Alert.alert('비밀번호 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다');
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

      <View style={styles.inputWrapper}>
        <TextInput 
          onChangeText={onPWConfirmChange} 
          placeholder='비밀번호 확인' 
          secureTextEntry={true}
          style={styles.input} 
        />
      </View>
      

      <View style={styles.buttonWrapper}>
        <Button 
          title='가입하기' 
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
    
    fontSize: 20,
    justifyContent: 'flex-end',
  },
  whitespace: {
    flex: 1,
  },
});

export default SignUpForm;
