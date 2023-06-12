import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';

export const RegistrationScreen = () => {
  return(
    <View >
      <ImageBackground
        style={{width: 50, height: 50}}
        source={require('../assets/images/auth-bg.png')}
      />
      

      <View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput style={styles.input} placeholder='Логін'/>
        <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
        <TextInput style={styles.input} placeholder='Пароль'/>
        <Button style={styles.btnSub} title='Зареєстуватися'/>
        <Button title='Вже є акаунт? Увійти'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: '#212121'
  },
  input:{
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    // border: 1 solid '#E8E8E8',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  btnSub:{
    width: 343,
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  }

})
