import { ImageBackground } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/bg_gif.gif')} style={styles.background}>
        <Text style={styles.text}>
          Welcome!
        </Text>
        <Button title='Get Started' onPress={() => console.log('Button Pressed')} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});