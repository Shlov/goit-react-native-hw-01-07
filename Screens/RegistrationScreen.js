import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Platform } from 'react-native';

export const RegistrationScreen = () => {
  console.log('pf', Platform.OS)
  return(
    <View style={{flex: 1}}>
      <ImageBackground resizeMode="cover"
        style={{flex: 1, justifyContent: 'flex-start',}}
        source={require('../assets/images/auth-bg-3x.png')}
      >
        <View style={{flex: 0.3,}}></View>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{gap: 16, marginHorizontal: 16,}}>
            <TextInput style={styles.input} textAlign='left' placeholder='Логін'/>
            <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
            <TextInput style={styles.input} placeholder='Пароль' secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.btnSub} activeOpacity={0.6}>
            <Text style={styles.btnSubTxt}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    marginTop: 32,
    marginBottom: 32,
  },
  input:{
    width: 343,
    height: 50,
    // marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    // border: 1 solid '#E8E8E8',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  btnSub:{
    width: 343,
    height: 50,
    // color: '#FFFFFF',
    // backgroundColor: '#FF6C00',
    backgroundColor: Platform.OS === "ios" ? '#01796f' : '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubTxt:{
    color: '#FFFFFF',
  }

})
