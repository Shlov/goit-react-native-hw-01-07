import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    // 'Roboto-Black': require('./assets/fonts/Roboto-Black.otf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.otf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.otf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 30 }}>Open up App.js to start working on your app!</Text> */}
      <RegistrationScreen/>
      <StatusBar style="auto" />
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
