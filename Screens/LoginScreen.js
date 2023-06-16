import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';

const initialState = { email: '', password: '' }

export const LoginScreen = () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [avatar, setAvatar] = useState(null);

  const keyboardHide = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };

  console.log('pf', Platform.OS);
  // console.log('state', state);
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ flex: 1 }}>
        <ImageBackground resizeMode="cover"
          style={{ flex: 1, justifyContent: 'flex-end', }}
          source={require('../assets/images/auth-bg-3x.png')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
          >
            <View style={{ ...styles.wrapper, paddingBottom: isShowKeyBoard ? 32 : 144 }}>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <View style={{ gap: 16, paddingBottom: isShowKeyBoard ? 0 : 42 }}>
                  <TextInput style={styles.input} onFocus={() => { setIsShowKeyBoard(true) }} placeholder='Адреса електронної пошти' onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))} />
                  <TextInput style={styles.input} onFocus={() => { setIsShowKeyBoard(true) }} placeholder='Пароль' secureTextEntry={true} onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))} />
                </View>
                {!isShowKeyBoard && <View style={{ gap: 16, }}>
                  <TouchableOpacity style={styles.btnSub} activeOpacity={0.6} onPress={keyboardHide}>
                    <Text style={styles.btnSubTxt}>Увійти</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{ textAlign: 'center' }}>Немає акаунту? Зареєструватися</Text>
                  </TouchableOpacity>
                </View>}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    marginTop: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {

    height: 50,
    padding: 16,

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  btnSub: {
    height: 50,
    backgroundColor: Platform.OS === "ios" ? '#01796f' : '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubTxt: {
    color: '#FFFFFF',
  }
});
